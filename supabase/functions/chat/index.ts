
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import OpenAI from "https://esm.sh/openai@4.20.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const systemPrompt = `You are Ava, a friendly and empathetic virtual assistant for HealthProAssist. Your goal is to conduct a care needs assessment for senior living. 
Ask questions one at a time to gather the following information:
1. Basic info: Name of the person needing care, their relationship to the user (if different), age, current living situation.
2. Location: Preferred city/area in Arizona.
3. Care Needs: Required level of care (Independent Living, Assisted Living, Memory Care, Skilled Nursing), specific medical conditions (e.g., Dementia, Diabetes, Mobility issues), assistance needed with Activities of Daily Living (ADLs) like bathing, dressing, eating, medication management.
4. Preferences: Budget range (per month), desired amenities (e.g., pet-friendly, fitness center, specific social activities), room preference (private/shared).
5. Timeline: When is the move-in desired?
Keep your responses concise and friendly. Guide the user through the process step-by-step. Start by asking for the name of the person needing care.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Invalid request body. Expected { messages: [...] }' }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const openai = new OpenAI({
      apiKey: Deno.env.get("OPENAI_API_KEY"),
    });

    const conversation = [
      { role: 'system', content: systemPrompt },
      ...messages
    ];

    const completion = await openai.chat.completions.create({
      model: Deno.env.get("OPENAI_MODEL") || 'gpt-4',
      messages: conversation as any,
      temperature: 0.7,
    });

    const assistantResponse = completion.choices?.[0]?.message?.content;

    if (!assistantResponse) {
      throw new Error('No response content received from OpenAI.');
    }

    return new Response(
      JSON.stringify({ response: assistantResponse }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (err: any) {
    console.error('OpenAI API error:', err.message);
    return new Response(
      JSON.stringify({ error: 'Failed to get response from AI assistant.' }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});


import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { text } = await req.json();

    if (!text) {
      return new Response(
        JSON.stringify({ error: 'Invalid request body. Expected { text: "..." }' }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!Deno.env.get("ELEVENLABS_API_KEY")) {
      return new Response(
        JSON.stringify({ error: 'Text-to-speech service is not configured.' }),
        {
          status: 503,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const elevenLabsVoiceId = Deno.env.get("ELEVENLABS_VOICE_ID") || "21m00Tcm4TlvDq8ikWAM";
    const ttsUrl = `https://api.elevenlabs.io/v1/text-to-speech/${elevenLabsVoiceId}/stream`;
    
    const response = await fetch(ttsUrl, {
      method: "POST",
      headers: {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": Deno.env.get("ELEVENLABS_API_KEY")!,
      },
      body: JSON.stringify({
        text: text,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
          style: 0.3,
          use_speaker_boost: true
        }
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`ElevenLabs API Error (${response.status}):`, errorBody);
      throw new Error(`ElevenLabs API request failed with status ${response.status}`);
    }

    // Stream the audio back to the client
    return new Response(response.body, {
      headers: {
        "Content-Type": "audio/mpeg",
        ...corsHeaders
      }
    });

  } catch (err: any) {
    console.error("ElevenLabs API error:", err.message);
    return new Response(
      JSON.stringify({ error: "Failed to generate audio." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});

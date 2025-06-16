
-- Create the assessments table to store assessment submissions
CREATE TABLE IF NOT EXISTS public.assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID, -- can be null if assessment is submitted by a guest
  budget_range TEXT,
  preferred_location TEXT,
  summary TEXT,
  recommended_care_types TEXT[], -- array for multiple care types
  conversation_history JSONB,
  other_preferences JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.assessments ENABLE ROW LEVEL SECURITY;

-- Allow users to see their own assessments (if user_id is set)
CREATE POLICY "Users can see their own assessments"
  ON public.assessments
  FOR SELECT
  USING (auth.uid() = user_id);

-- Allow users to insert assessments for themselves
CREATE POLICY "Users can insert their own assessments"
  ON public.assessments
  FOR INSERT
  WITH CHECK (user_id IS NULL OR auth.uid() = user_id);

-- Allow users to update their own assessments
CREATE POLICY "Users can update their own assessments"
  ON public.assessments
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Allow users to delete their own assessments
CREATE POLICY "Users can delete their own assessments"
  ON public.assessments
  FOR DELETE
  USING (auth.uid() = user_id);

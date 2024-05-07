import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qndwwafrfvrlddtmrzww.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuZHd3YWZyZnZybGRkdG1yend3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNDc5NDAsImV4cCI6MjAyNDkyMzk0MH0.m-mUwbR_0eYNIgho9dAhIRpfafiZLtN6lBAhe3U9vtc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

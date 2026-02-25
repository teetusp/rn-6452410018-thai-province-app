import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aalaepmrtnujzwlhzagx.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhbGFlcG1ydG51anp3bGh6YWd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5ODM0ODUsImV4cCI6MjA4NzU1OTQ4NX0.SOR0G6aLuropIQ2TcDvdpuRbok09VgyA-QvtBfP3dBo";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

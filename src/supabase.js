import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://doxwitvxtavlskqcafkc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRveHdpdHZ4dGF2bHNrcWNhZmtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ2NzE5MDksImV4cCI6MjAxMDI0NzkwOX0.wyRI854X-4Ep3R4mxrDFcBEpmPQo_rYgPyCF510jczQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

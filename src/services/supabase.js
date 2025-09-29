import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dkausynrztqdjplgkexu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrYXVzeW5yenRxZGpwbGdrZXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNTMyNDcsImV4cCI6MjA3NDcyOTI0N30.DcWQ3kgmMAakydJ96ieWHWSLl_P4WpsMYPvuRSuDnS0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hoimwhyialuigwgxbozm.supabase.co";
const supabaseKey = import.meta.env.VITE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

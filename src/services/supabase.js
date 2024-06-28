import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_BASE_URL;
const supabaseKey = import.meta.env.VITE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const supabaseStoragePath = import.meta.env.VITE_STORAGE_PATH;

export default supabase;

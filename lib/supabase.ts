import { createClient } from '@supabase/supabase-js';

// We tell Next.js to go look inside your hidden .env.local file name and grab the keys.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;

const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// We use thye keys to forge the permanent connection to your vault in Mumbai.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
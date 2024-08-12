import { createClient as createSupabaseClient } from "@supabase/supabase-js";

export function createClient() {
  // Use environment variables directly to create the Supabase client
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

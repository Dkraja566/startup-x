
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://mtbfvxjdgwdpsrgphkru.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10YmZ2eGpkZ3dkcHNyZ3Boa3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5OTYwMTYsImV4cCI6MjA1NTU3MjAxNn0.vHlL0JjifNV6U--mxymJxVLT74MvYG3ZhEJG6WIkfJE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

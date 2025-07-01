import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://rwystcrlbnzgignvtzck.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3eXN0Y3JsYm56Z2lnbnZ0emNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2MTQyNDgsImV4cCI6MjA2NjE5MDI0OH0.bp5NNNSsgp85YGENIyhaGsU7dojwU0t2-OsKggbYLCg'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
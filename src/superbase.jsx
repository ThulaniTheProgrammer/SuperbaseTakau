import { createClient } from '@supabase/supabase-js'



const supabaseUrl = 'https://uhszkduaylkozvldeujt.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoc3prZHVheWxrb3p2bGRldWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2MzA2NDYsImV4cCI6MjAxOTIwNjY0Nn0.IlASwr44Bxry1t4aDJe2StFfV11wE25rJIKQhPc0AG8'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase 
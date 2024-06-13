import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vaunlaxbljkuvdapkihl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhdW5sYXhibGprdXZkYXBraWhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyODM1MTUsImV4cCI6MjAzMzg1OTUxNX0.IqRIimm8R2yLOng1Cw7wTDL6G40P1vfAbXjpXHncyS8';

export const supabase = createClient(supabaseUrl, supabaseKey);

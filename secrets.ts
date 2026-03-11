/**
 * SECRETS & CONFIGURATION
 * 
 * Replace the placeholder values below with your actual keys.
 * This ensures the app works correctly on any hosting platform (like Hostinger)
 * without needing to set environment variables manually.
 */

export const SECRETS = {
  // Supabase (Public)
  VITE_SUPABASE_URL: 'https://zocncwchaakjtsvlscmd.supabase.co',
  VITE_SUPABASE_ANON_KEY: 'sb_publishable_Ot34P55l4JGe2RjZywLovA_UokWsJ0I',

  // Supabase (Private - Server Side)
  // IMPORTANT: This should be the "service_role" key from Supabase settings
  // DO NOT use the "anon" key here, as it will cause insertion errors if RLS is enabled.
  SUPABASE_SERVICE_ROLE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvY25jd2NoYWFranRzdmxzY21kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTI1MTEyMSwiZXhwIjoyMDg0ODI3MTIxfQ.RcSTKY9b72Q4BrI36pxKTQ1NqAgOnhDUFc9YrJlv_d4',

  // Backend Security
  // This key must match between frontend and backend to authorize requests
  BACKEND_API_KEY: 'ayada_secret_key_2024',

  // SMTP (Hostinger)
  SMTP_HOST: 'smtp.hostinger.com',
  SMTP_PORT: 465,
  SMTP_USER: 'hello@maldives-serenitytravels.com',
  SMTP_PASS: 'Sphinx900#',
  SMTP_FROM: '"TripMaldives" <hello@maldives-serenitytravels.com>',

  // App URL
  APP_URL: 'https://www.ayada.tripmaldives.co',
};

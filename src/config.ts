/**
 * CONFIGURATION & SECRETS
 * 
 * This file centralizes all API keys and configuration settings.
 * For production hosting (like Hostinger), you can either set these as 
 * environment variables or replace the placeholder values below.
 */

export const CONFIG = {
  // Supabase Configuration (Public/Client-side)
  SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL || 'https://zocncwchaakjtsvlscmd.supabase.co',
  SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_Ot34P55l4JGe2RjZywLovA_UokWsJ0I',

  // Server-side Secrets (Only used in server.ts)
  // On Hostinger, these should ideally be in a .env file, but if your hosting 
  // doesn't support them, you can replace the 'process.env' calls in server.ts 
  // with hardcoded strings.
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY || 'YOUR_SERVICE_ROLE_KEY',
  
  // Backend Security
  // This key must match between frontend and backend to authorize requests
  BACKEND_API_KEY: import.meta.env.VITE_BACKEND_API_KEY || 'ayada_secret_key_2024',
  
  // SMTP Configuration (Hostinger)
  SMTP: {
    HOST: process.env.SMTP_HOST || 'smtp.hostinger.com',
    PORT: parseInt(process.env.SMTP_PORT || '465'),
    USER: process.env.SMTP_USER || 'hello@maldives-serenitytravels.com',
    PASS: process.env.SMTP_PASS || 'Sphinx900#',
    FROM: process.env.SMTP_FROM || '"Hello" <hello@maldives-serenitytravels.com>',
  },

  // App URL
  APP_URL: process.env.APP_URL || 'https://www.tripmaldives.co',

  // API URL for client-side requests
  // IMPORTANT: 
  // 1. For local development and AI Studio preview, leave this as '' (empty string).
  // 2. For Hostinger, if your backend is on Cloud Run, set this to your Cloud Run URL.
  // 3. If your backend is on the same Hostinger server, leave this as ''.
  API_URL: import.meta.env.VITE_API_URL || '',
};

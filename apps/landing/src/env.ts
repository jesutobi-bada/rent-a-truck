import { z } from 'zod';

const envSchema = z.object({
  VITE_SUPPORT_LOCATION: z.string().min(1),
  VITE_SUPPORT_EMAIL: z.email(),
  VITE_SUPPORT_HOTLINE: z.string().min(1),
  VITE_SOCIAL_INSTAGRAM: z.url().optional(),
  VITE_SOCIAL_X: z.url().optional(),
  VITE_SOCIAL_FACEBOOK: z.url().optional(),
  VITE_SOCIAL_LINKEDIN: z.url().optional(),
  VITE_APP_RENTER_URL: z.string().url(),
  VITE_APP_DRIVER_URL: z.string().url(),
  VITE_APP_ADMIN_URL: z.string().url(),
});

/**
 * Validates the environment variables at build-time/runtime.
 * If any of these are missing, the app will throw an error immediately.
 */
const _env = envSchema.safeParse(import.meta.env);

if (!_env.success) {
  console.error('❌ Invalid environment variables:', _env.error.format());
  throw new Error('Invalid environment variables');
}

export const env = _env.data;

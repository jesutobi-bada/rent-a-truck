# Env Rules (Security, Validation, & Anti-Gravity)

In a monorepo like **Rent-a-Truck**, managing environment variables is a common point of failure. Without strict rules, you end up with "Works on my machine" bugs or security leaks where the **Admin** secrets accidentally end up in the **Driver PWA** bundle.

Here are the **Anti-Gravity Rules** for environment variables.

---

## 1. The "Secret Source" Rule

**Rule:** All `.env` files must be ignored by Git. Only `.env.example` files are allowed in the repository.

- **Logic:** This prevents sensitive keys (like Paystack Secret Keys or Database passwords) from ever hitting your GitHub history.
- **Action:** Add `.env`, `.env.local`, and `.env.production` to your root `.gitignore`.

---

## 2. The "Prefix Protection" Rule (Zod Validation)

**Rule:** Every app must validate its environment variables at **build time** using a schema (Zod).

- **Logic:** If a developer forgets to add `NEXT_PUBLIC_API_URL`, the build should fail immediately with a clear error message, rather than the app crashing in production with an "undefined" error.
- **The Law:** Use the `t3-oss/env-nextjs` (or a custom Zod script) to define which variables are required.

---

## 3. The "Public vs. Private" Boundary

**Rule:** Strictly enforce the naming convention for client-side accessibility.

- **Public (Bundled):** Use `NEXT_PUBLIC_` or `VITE_` prefixes for variables the frontend needs (API URLs, Firebase Keys).
- **Private (Server-only):** No prefix. These must **never** be accessed in the browser.
- **Anti-Gravity Check:** If a component in the `packages/ui` needs a variable, it must be passed in as a **prop**. The UI package should never read `process.env` directly.

---

## 4. The "Config Package" Schema

**Rule:** Shared environment logic (like the Axios Base URL logic) should be handled in `packages/config`.

- **Logic:** Create a shared schema in `packages/config/env` so that all apps validate common variables (like `APP_ENV` or `SENTRY_DSN`) the same way.

---

## 5. Deployment Mapping (The Matrix)

To keep the monorepo organized, map your variables across your environments clearly:

| **Variable**          | **Development**  | **Staging**                 | **Production**      |
| --------------------- | ---------------- | --------------------------- | ------------------- |
| `APP_ENV`             | `development`    | `staging`                   | `production`        |
| `API_URL`             | `localhost:8000` | `api-staging.rentatruck.ng` | `api.rentatruck.ng` |
| `PAYSTACK_PUBLIC_KEY` | `pk_test_...`    | `pk_test_...`               | `pk_live_...`       |

---

## 6. The "No-Default" Rule

**Rule:** Never provide default values for production-critical variables in the code.

- **Logic:** If `PAYSTACK_PUBLIC_KEY` is missing, the app should fail to start. Providing a "fallback" test key in production code is a major financial risk.

---

## 7. Implementation Example (Zod Schema)

Create a file in each app (e.g., `apps/renter-pwa/src/env.mjs`):

```typescript
import { z } from 'zod';

export const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
  NEXT_PUBLIC_PAYSTACK_KEY: z.string().min(1),
  NODE_ENV: z.enum(['development', 'test', 'production']),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('❌ Invalid environment variables:', _env.error.format());
  throw new Error('Invalid environment variables');
}

export const env = _env.data;
```

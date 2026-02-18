# Logger Rules (Clean Console & Sentry)

In a professional monorepo like **Rent-a-Truck**, you want to avoid "log-pollution" in production. Leaking system internals, API payloads, or user data into the browser console is a security risk and looks unprofessional to the end-user.

By placing the **Logger** in `packages/utils`, you ensure that every app (Renter, Driver, Admin) uses the same controlled logging interface.

---

## 1. The Logger Utility Structure

The logger acts as a wrapper around the native `console` object, but it "mutes" itself based on the `NODE_ENV`.

### Directory: `packages/utils/src/logger.ts`

```typescript
type LogLevel = 'info' | 'warn' | 'error' | 'debug';

const isProduction = process.env.NODE_ENV === 'production';

/**
 * Rent-a-Truck Logger Utility
 * Mutes all logs in production except for critical errors.
 */
export const logger = {
  info: (message: string, ...args: any[]) => {
    if (!isProduction) {
      console.info(`[INFO] ${message}`, ...args);
    }
  },

  warn: (message: string, ...args: any[]) => {
    if (!isProduction) {
      console.warn(`[WARN] ${message}`, ...args);
    }
  },

  error: (message: string, ...args: any[]) => {
    // We usually allow errors in production for debugging via Sentry/LogRocket,
    // but we can strip additional arguments for privacy.
    if (isProduction) {
      console.error(`[ERROR] ${message}`);
    } else {
      console.error(`[ERROR] ${message}`, ...args);
    }
  },

  debug: (message: string, ...args: any[]) => {
    if (!isProduction) {
      console.debug(`[DEBUG] ${message}`, ...args);
    }
  },
};
```

---

## 2. Anti-Gravity Rules for Logging

1. **The "Native Console" Ban:** No app or package should use the raw `console.log()` directly.
   - **Enforcement:** Add an ESLint rule (`no-console`) to the `packages/config` that triggers an error for `console.log` but allows `logger.info`.
2. **The "Context" Rule:** Always include a prefix or context in your logs (e.g., `[BookingFeature]`) to make it easier to filter logs in the dev console.
3. **The "No-Sensitive-Data" Rule:** Never log sensitive information like Passwords, Bearer Tokens, or BVN details, even in development.
4. **The "Error-Only Production" Law:** In production, the logger only permits `logger.error`. All `info`, `warn`, and `debug` calls are automatically silenced to keep the PWA clean.

---

## 3. Advanced Integration: Sentry/Error Tracking

Since you are building a logistics marketplace, you need to know when things break in the wild.

- **Rule:** If `isProduction` is true, `logger.error` should also send the error to a service like **Sentry**.

```typescript
// Example of production error tracking integration
error: (message: string, error?: Error) => {
  if (isProduction) {
    // Sentry.captureException(error || new Error(message));
    console.error(`[PROD-ERROR] ${message}`);
  } else {
    console.error(`[ERROR] ${message}`, error);
  }
};
```

---

## 4. Usage in the Apps

Now, across your monorepo, you can log without fear:

```typescript
import { logger } from '@rent-a-truck/utils';

const handlePayment = async () => {
  logger.info('Initiating Paystack transaction', { amount: 5000 });

  try {
    // payment logic
  } catch (err) {
    logger.error('Payment failed', err);
  }
};
```

---

### **Final Governance Checklist:**

- [ ] Is `NODE_ENV` correctly passed in your `turbo.json` environments?
- [ ] Have you added `export * from './logger'` to the `packages/utils/src/index.ts` barrel file?
- [ ] Did you set up the ESLint "no-console" rule to point developers toward the logger?

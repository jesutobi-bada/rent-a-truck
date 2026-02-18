# Axios Rules (Shared Client & Anti-Gravity)

This is a critical piece of the monorepo. By placing the Axios logic in `packages/config`, you ensure that the **Renter**, **Driver**, and **Admin** apps all handle security and feedback identically, while still allowing them to point to different base URLs or headers.

Here is the technical specification and the "Anti-Gravity Rules" for your shared Axios client.

---

## 1. The Axios Client Structure

The client will be exported as a **Factory Function**. This allows each app to initialize its own instance with a custom `baseURL` (e.g., `api.rentatruck.com/v1/driver` vs `/admin`).

### Directory: `packages/config/axios`

```
axios/
├── src/
│   ├── index.ts          # The Factory Function
│   ├── interceptors.ts   # Request/Response logic
│   └── types.ts          # Config interfaces
├── package.json
└── tsconfig.json
```

---

## 2. Anti-Gravity Rules for the Axios Client

1. **The "Blind App" Rule:** The Axios client must not know which app is calling it. It should receive "callbacks" (like `onLogout` or `getToken`) as arguments during initialization.
2. **The "Silent Get" Rule:** GET requests must never trigger a toast notification. Only mutations (`POST`, `PUT`, `PATCH`, `DELETE`) are allowed to trigger success/error feedback.
3. **The "Single Refresh" Rule:** If multiple requests fail with a 401 simultaneously, the client must queue them and only perform **one** refresh token call to avoid slamming the server and invalidating tokens.
4. **The "Protected Route" Pattern:** Only routes **not** in an `EXCLUDED_PATHS` list (like `/login` or `/register`) should have the Bearer token attached.

---

## 3. The Implementation Prompt (Technical Blueprint)

If you are generating this code or building it, here is the logic for the interceptors:

### A. Request Interceptor (The Token Attacher)

- Check if the URL is "protected."
- Retrieve the token via a provided `getToken()` function.
- Attach `Authorization: Bearer <token>` to the headers.

### B. Response Interceptor (The Feedback & Security Engine)

**1. Success Handler:**

- Check the method: If `POST`, `PUT`, `PATCH`, or `DELETE`.
- Trigger a `notify.success(response.data.message || 'Action Successful')`.

**2. Error Handler (The 401 Logic):**

- **Case 401 (Unauthorized):**
  - If `isRefreshing` is false, start the `refreshToken()` flow.
  - Queue all incoming failed requests in a `failedQueue`.
  - On success: Retry all queued requests with the new token.
  - On failure: Call `onLogout()` and redirect to `/login`.
- **Case 4xx/5xx (Other Errors):**
  - Trigger `notify.error(error.response.data.message || 'An error occurred')`.

---

## 4. Initialization Example (In the Apps)

Each app (e.g., `driver-pwa`) will initialize it in its `core/api` folder:

```typescript
// apps/driver-pwa/src/core/api/client.ts
import { createAxiosClient } from '@rent-a-truck/config/axios';
import { toast } from '@rent-a-truck/ui'; // Use the shared toast

export const api = createAxiosClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  getToken: () => localStorage.getItem('access_token'),
  getRefreshToken: () => localStorage.getItem('refresh_token'),
  onLogout: () => {
    localStorage.clear();
    window.location.href = '/login';
  },
  onNotify: (type, message) => {
    type === 'success' ? toast.success(message) : toast.error(message);
  },
});
```

---

## 5. Handling Token Refresh Queuing

To prevent race conditions, the client uses a `isRefreshing` flag and an array to store `resolve` and `reject` functions of the pending requests. This ensures that if 5 components call the API at once when the token expires, the user only sees **one** loading state and **one** successful refresh.

# TanStack Query Rules (State Synchronization)

To keep the **Rent-a-Truck** data layer lean and predictable, your TanStack Query (React Query) setup should act as the "State Synchronizer" between your Axios client and the UI.

The goal is to ensure that the **Renter**, **Driver**, and **Admin** apps handle caching, invalidation, and loading states identically while maintaining the **Feature-Based** architecture.

---

## 1. The Shared Configuration (`packages/config/query`)

Rather than each app setting its own defaults, you define a base `QueryClient` configuration. This ensures that a "Driver" on a shaky Nigerian 4G connection doesn't experience unnecessary data fetching.

### Anti-Gravity Rules for TanStack Query

1. **The "Feature Invalidation" Rule:** Invalidation must be scoped to the feature. If a `booking` is updated, only the `['booking']` tags should be invalidated, not the entire cache.
2. **The "No-Global-Store" Rule:** Use TanStack Query as the primary source of truth for server state. Do not mirror API data into Redux or Zustand unless it needs heavy client-side manipulation.
3. **The "Stale-Time" Law:**
   - **Static Data** (Vehicle types, user profile): `staleTime: 5 * 60 * 1000` (5 mins).
   - **Live Data** (Truck location, job status): `staleTime: 0` (Always fetch fresh).

---

## 2. The Global Provider Setup

In `packages/config/query/src/index.ts`, export a pre-configured `QueryClient`.

```typescript
// packages/config/query/src/index.ts
import { QueryClient } from '@tanstack/react-query';

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: (failureCount, error: any) => {
          // Don't retry for 401s (handled by Axios) or 404s
          if (error?.status === 401 || error?.status === 404) return false;
          return failureCount < 3;
        },
        refetchOnWindowFocus: false, // Prevents aggressive refetching in PWA
        staleTime: 30000, // 30 seconds default
      },
    },
  });
```

---

## 3. The "Query Key Factory" Pattern

One of the biggest causes of "gravity drift" is inconsistent query keys (e.g., one dev uses `'bookings'` and another uses `['all-bookings']`). You must implement a **Query Key Factory** per feature.

### Folder: `apps/[app]/src/features/booking/queries.ts`

```typescript
export const bookingKeys = {
  all: ['bookings'] as const,
  lists: () => [...bookingKeys.all, 'list'] as const,
  detail: (id: string) => [...bookingKeys.all, 'detail', id] as const,
};
```

---

## 4. Shared Custom Hooks (Molecules)

While the `QueryClient` is in `packages/config`, the actual hooks stay inside the **Feature** folders of the specific apps. However, for features shared across apps (like **User Profile**), you create a shared feature package.

### Feature: `useGetCurrentUser`

- **Location:** `packages/shared-features/auth/hooks.ts`
- **Logic:** Uses the Axios client from `@rent-a-truck/config` to fetch the user.
- **Result:** Both the Renter and Driver apps import this single hook, ensuring the `['user']` cache key is identical.

---

## 5. Mutation Side-Effects (Axios + Query Integration)

Because your Axios client already handles **Success/Error Toasts**, your TanStack Mutations should focus strictly on **Cache Updates**.

- **Success:** Use `queryClient.invalidateQueries()` to trigger a refetch.
- **Optimistic Updates:** For the Driver App, use `onMutate` to immediately update the UI (e.g., marking a job as "Accepted") before the server responds to account for Nigerian latency.

---

## 6. Implementation Strategy: The "Query-SDK"

For your **api-sdk** package, you should export "Query Options" instead of just fetchers.

```typescript
// packages/api-sdk/src/vehicles.ts
export const getVehiclesQueryOptions = (params: FilterParams) => ({
  queryKey: ['vehicles', params],
  queryFn: () => api.get('/vehicles', { params }),
});
```

_App Usage:_ `useQuery(getVehiclesQueryOptions(filters))`

---

### **Final Checklist before building:**

- [ ] Is the `QueryClientProvider` wrapped at the root of all 3 apps?
- [ ] Does the Axios interceptor correctly trigger the logout flow that clears the Query Cache?
- [ ] Are we using `Suspense` for loading states in the Admin portal but `Skeleton` screens for the PWAs?

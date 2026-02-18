# Asynchronous Rules (Loading, Optimistic UI, & Skeletons)

To maintain a professional, "fast" feel for **Rent-a-Truck** across varying network conditions in Nigeria, we need strict rules for how data-loading and asynchronous states are displayed.

These rules ensure that the user never feels like the app has "frozen" and that the transition from loading to loaded is seamless.

---

## 1. The "Skeleton-First" Rule

**Rule:** For all primary content areas (Vehicle Lists, Job Details, Profile Screens), use **Skeletons** passed as `fallback` to a **Suspense** boundary.

- **Logic:** The Skeleton must match the **height, width, and border-radius** of the final component exactly to prevent "Layout Shift" (where the page jumps when data arrives).
- **Design Requirement:** Skeletons should use a subtle pulse animation (`animate-pulse` in Tailwind) using `Gray-100` and `Gray-200` tokens.

---

## 2. The "400ms Threshold" Rule

**Rule:** Do not show a loading state if the data resolves in under 400ms.

- **Logic:** Showing a Skeleton for 100ms and then swapping it for content creates a "flicker" that is more distracting than a slight delay.
- **Implementation:** Use a delayed-render wrapper for your Skeletons so they only appear if the network request is taking longer than a "blink."

---

## 3. The "Action Lock" Rule (Optimistic UI)

**Rule:** For high-frequency actions (Accept Job, Cancel Order, Toggle Online), use **Optimistic Updates** to move the UI state immediately.

- **Logic:** In the **Driver PWA**, the driver shouldn't wait for a round-trip to the server to see that they have successfully toggled "Online."
- **Recovery:** If the server request fails, the Axios/TanStack Query client must automatically "roll back" the UI state and trigger an Error Toast.

---

## 4. The "Full-Page Suspense" Rule (Cold Starts)

**Rule:** Use a single, high-level Suspense boundary with a **Brand Loader** for initial app "Cold Starts" or major route changes.

- **Logic:** When the user first opens the Renter PWA, show a centered "Rent-a-Truck" logo with a blue loading bar.
- **Constraint:** This should only happen for the initial load. Once the app is "warmed up," transition to granular Skeletons.

---

## 5. The "Mutation Overlay" Rule

**Rule:** When a user submits a form (e.g., "Confirm Payment"), the specific button should enter a **Loading State**, and the rest of the form should be **Disabled**.

- **Logic:** This prevents "Double-Submission" errors where a user taps "Pay" multiple times while waiting for the Paystack modal.
- **Visual:** The button text is replaced by a spinner, or the button enters a `loading` state using the `rt-button` component logic.

---

## 6. The "Empty & Error State" Rule

**Rule:** Every asynchronous component must have a defined **Empty State** and **Error State**.

- **Empty State:** Use a custom illustration (e.g., an empty truck) with a clear Call-to-Action (e.g., "Try changing your filters").
- **Error State:** Show a "Retry" button. Never just show a blank screen or a cryptic error code.

---

## 7. The "Shared Skeleton" Package

**Rule:** Skeletons must live inside the `@rent-a-truck/ui` package alongside their components.

- **Logic:** If you update the `VehicleCard` design, you are forced to update the `VehicleCardSkeleton` in the same file. This prevents the skeleton from becoming outdated compared to the actual component.

---

### **Implementation Strategy**

We will use TanStack Query’s `useSuspenseQuery` for all data fetching. This forces the developer to handle the loading state at the parent level using a Suspense boundary, keeping the business logic clean of `if (loading)` checks.

# App Rules (Feature-Based Structure & Anti-Gravity)

To scale **Rent-a-Truck** effectively, we need to combine the **Feature-Based Structure** with **Anti-Gravity Rules** that prevent the apps from becoming bloated.

In a feature-based architecture, instead of grouping by technical type (components, hooks, services), you group by business domain (booking, fleet, tracking).

---

## 1. Feature-Based Folder Structure

Each app (Renter, Driver, Admin) should follow this internal layout. This keeps the "Booking" logic completely separate from the "Profile" logic.

```
apps/[app-name]/src/
├── features/
│   ├── booking/            # Domain: Map, Search, Trip Request
│   │   ├── components/     # Feature-specific UI (e.g., BookingCard.tsx)
│   │   ├── hooks/          # useBooking.ts
│   │   ├── services/       # bookingApi.ts
│   │   └── index.ts        # PUBLIC API FOR THE FEATURE
│   ├── auth/               # Domain: Login, KYC, Verification
│   └── tracking/           # Domain: Real-time GPS, ETA
├── core/                   # App-wide layouts, providers, and global stores
├── lib/                    # Third-party configs (e.g., Paystack init)
└── pages/                  # Route definitions only
```

---

## 2. Anti-Gravity Rules: Cross-App (The Monorepo)

- **The "Core Only" Exception:** Apps can only share code through `packages/`. Never "reach over" from `apps/renter` to `apps/driver`.
- **The "Public API" Rule:** Every feature must have an `index.ts` (Barrel file). Other features can _only_ import from that index file, never deep-import into `features/booking/components/...`.
- **The "UI Promotion" Rule:** If a component is created inside `features/booking/components` and is later needed by the `auth` feature or another app, it must be **promoted** to `@rent-a-truck/ui`.

---

## 3. Anti-Gravity Rules: The Renter App (Consumer)

_Focus: Simplicity and high conversion._

- **Rule: Zero Driver-Side Logic.** The Renter app must never contain "Accept Job" or "Start Trip" logic. If the backend returns driver-specific data, the frontend should treat it as read-only.
- **Rule: Paystack Isolation.** All payment processing must be wrapped in a specific `services/payment` layer within the Renter app. Components should never call Paystack directly.
- **Rule: Location-First.** All booking views must default to the user's current GPS location.

---

## 4. Anti-Gravity Rules: The Driver App (Operator)

_Focus: Utility, high contrast, and offline reliability._

- **Rule: No Desktop Optimization.** This app is for phones. Do not add complex sidebars or hover-states that don't work on mobile.
- **Rule: Battery & Data Thrift.** Real-time GPS polling must be optimized. Do not re-render heavy map components unless the driver's coordinates have changed by more than 10 meters.
- **Rule: Status Lock.** A driver cannot navigate away from an active job screen until the status is marked as "Arrived" or "Completed."

---

## 5. Anti-Gravity Rules: The Admin Portal (Management)

_Focus: Efficiency and massive data handling._

- **Rule: Table-First Design.** Information must be scannable. Every data view must have a "Filter," "Search," and "Export" functionality.
- **Rule: Restricted Edit Access.** Admins cannot edit "Renter" profiles unless they have a `SuperAdmin` role. Verification of "Transporter" documents is the only primary write-action.
- **Rule: Standardized Modals.** All "Approval" and "Rejection" flows must use a shared `ConfirmActionModal` from the UI package to prevent accidental deletions.

---

## 6. The "Feature-to-Package" Rule

To prevent the apps from getting heavy, we follow this gravity check:

> **"If a feature folder (e.g., `features/tracking`) is used by more than one app, it is a candidate to become its own package in `packages/shared-features`."**

This is how you handle the "Map Tracking" logic—since both the Renter (to see the truck) and the Driver (to navigate) need it, it eventually moves out of the `apps/` and into a shared package.

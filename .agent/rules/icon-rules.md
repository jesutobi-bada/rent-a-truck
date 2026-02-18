# Icon Rules (HugeIcons Only)

To maintain visual consistency across **Rent-a-Truck**, we strictly enforce the use of **HugeIcons** for all iconography. This ensures a unified "Pro" look and prevents the mixing of stroke weights and styles.

---

## 1. The "Single Source" Rule

**Rule:** All icons must be imported from `@hugeicons/react`.

- **Banned:** `lucide-react`, `react-icons`, `@heroicons/react`, or bespoke SVG imports (unless it's a custom logo).
- **Why:** HugeIcons provides a consistent stroke width and corner radius that aligns with our design system.

## 2. Implementation Guide

### Installation

The icon library is managed **exclusively** by `packages/ui`.

Individual apps and packages should **not** install HugeIcons packages directly.

### Usage (Gateway Pattern)

Import icons from the `@rent-a-truck/ui` package using the centralized `Icons` gateway:

```tsx
import { Icons } from '@rent-a-truck/ui';

// Icons are provided as ready-to-use components
<Icons.Truck className="h-6 w-6 text-amber-500" />;
```

## 3. Brand Icon Mapping

In `packages/ui/src/components/atoms/icon/index.tsx`, icons are mapped to brand-specific names:

| Gateway Name        | Concept       | HugeIcons Equivalent  |
| :------------------ | :------------ | :-------------------- |
| `Icons.Truck`       | **Truck**     | `DeliveryTruck01Icon` |
| `Icons.Users`       | **Community** | `UserGroupIcon`       |
| `Icons.Location`    | **GPS/Map**   | `Location01Icon`      |
| `Icons.Security`    | **Safety**    | `SecurityCheckIcon`   |
| `Icons.Verified`    | **Trust**     | `UserCheck01Icon`     |
| `Icons.Payment`     | **Billing**   | `CreditCardIcon`      |
| `Icons.CheckCircle` | **Success**   | `Tick01Icon`          |
| `Icons.Download`    | **Install**   | `Download01Icon`      |
| `Icons.Smartphone`  | **Mobile**    | `SmartPhone01Icon`    |

## 4. Anti-Gravity Check

**Do not** install `lucide-react` in any new app or package. If you find it, refactor it out immediately.

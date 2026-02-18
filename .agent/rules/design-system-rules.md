# Design System Rules (Anti-Gravity Rules)

In a multi-repo design system like **Rent-a-Truck**, "Anti-Gravity Rules" are the governance laws that prevent the system from drifting into chaos. They ensure that as you scale from one repo to three, the UI doesn't "float away" from the brand standards.

Here are the strict anti-gravity rules for your design system:

---

## 1. The "Zero Local Styles" Rule

**Rule:** Individual applications (Renter, Driver, Admin) are forbidden from defining custom colors, margins, or fonts locally.

- **Logic:** If a developer needs a specific shade of blue that isn't in the tokens, they must request an update to the `@rent-a-truck/ui` package rather than hard-coding a hex value.
- **Enforcement:** Use a linter (like `stylelint`) to flag any hard-coded hex, rgb, or pixel values that do not match a design token.

---

## 2. The "Atomic Immortality" Rule

**Rule:** Atoms (Buttons, Inputs, Icons) cannot contain business logic.

- **Logic:** A `Button` component shouldn't know about Paystack or Truck Registration. It only knows about `label`, `onClick`, and `variant`.
- **Reasoning:** This allows the same Button to be used for "Pay Now" in the Renter app and "Delete Driver" in the Admin portal without carrying unnecessary code weight.

---

## 3. The "One-Way Dependency" Rule

**Rule:** The Design System can never import from the Apps.

- **Logic:** `@rent-a-truck/ui` is the foundation. It must be able to exist entirely on its own.
- **Constraint:** You can never import a "UserProfile" logic from the Renter repo into a "Header" component in the Design System. If a component requires data, it must be passed in via **Props**.

---

## 4. The "Mobile-First, Desktop-Second" Rule

**Rule:** All shared components must be functional on a 360px width before they are optimized for 1440px.

- **Logic:** Since the Driver and Renter apps are primarily PWAs, the "Heavy" desktop view should be a progressive enhancement of the mobile view, not vice-versa.
- **Constraint:** Every component in Storybook must be tested at the `sm` breakpoint first.

---

## 5. The "SemVer Protection" Rule

**Rule:** No breaking changes can be pushed to the `main` branch of the UI repo without a Major version bump.

- **Logic:** If you change the `radius-md` from 12px to 20px, you might break the layout in the Admin tables.
- **Action:** All changes must be peer-reviewed by at least one developer from a _different_ repo team to ensure cross-app compatibility.

---

## 6. The "Documentation or Death" Rule

**Rule:** A component does not exist until it is in Storybook with its Props documented.

- **Logic:** To prevent "Shadow Components" (developers building their own versions because they didn't know the official one existed), every atom and molecule must be discoverable in the central documentation.

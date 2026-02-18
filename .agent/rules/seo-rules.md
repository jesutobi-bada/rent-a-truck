# SEO Rules

These rules apply to the development and architecture of the landing page.

## 1. The Pre-Rendering Strategy

**Rule:** Use **Vite-Plugin-SSR** or **SSG (Static Site Generation)** for public landing pages.

- **The Strategy:** Since a logistics marketplace has many pages that don't change every second (like "Services," "About," or "Truck Types"), you should use **Static Site Generation**.
- **Tools:** Use `vite-ssg` or `vite-plugin-prerender`.
- **Logic:** During the build process, Vite will crawl your routes and generate actual `.html` files for each one. When Google hits `rentatruck.ng/trucks/flatbed`, it sees the full HTML content immediately.

---

## 2. Dynamic Head Management

**Rule:** Use `react-helmet-async` to manage document head changes.

In Vite, the `index.html` is static. To change the `<title>` and `<meta>` tags as users navigate between a "Tanker" listing and a "Trailer" listing, you must use a provider.

```typescript
// packages/ui/src/components/seo.tsx
import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, image }) => (
  <Helmet>
    <title>{title} | Rent-a-Truck</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:image" content={image} />
    <link rel="canonical" href={window.location.href} />
  </Helmet>
);
```

---

## 3. The "No-JS" Fallback Rule

**Rule:** Provide meaningful content inside the `#root` div in your `index.html`.

- **Logic:** While the app is loading (or if JS is disabled/fails), show a "Static Hero" or a high-quality loading state that contains your main keywords.
- **Benefit:** It ensures that even the most basic crawler gets a sense of what the page is about before the React app "hydrates."

---

## 4. Route-Based Code Splitting

**Rule:** Use `React.lazy()` for all main routes to improve **Largest Contentful Paint (LCP)**.

- **Logic:** Vite is great at code-splitting. By lazy-loading routes, the initial bundle sent to the user (and the crawler) is much smaller. Faster load times = higher Google ranking.
- **Anti-Gravity Rule:** Wrap your routes in the **Suspense + Skeleton** pattern we established earlier.

---

## 5. Deployment-Level SEO (Vercel/Netlify)

**Rule:** Use "Edge Functions" or "Redirects" for clean URLs.

- **Clean URLs:** Ensure your Vite app doesn't use hash routing (e.g., `rentatruck.ng/#/login`). Use the **HTML5 History API** so your URLs look like `rentatruck.ng/login`.
- **Fallback:** Configure your host (Vercel/Netlify) to redirect all traffic to `index.html` so that deep-links (like a specific truck share link) don't return a 404 error when refreshed.

---

## 6. Image Optimization in Vite

**Rule:** Use `vite-plugin-imagemin` for local assets and **Cloudinary** for user-uploaded assets.

- **Local Icons:** Vite won't automatically shrink your local PNGs. This plugin compresses them during the build.
- **Responsive Images:** Use the `srcset` attribute in your `<img>` tags to serve smaller images to mobile users on 3G networks in Nigeria.

---

## 7. Sitemap Automation

**Rule:** Generate a `sitemap.xml` on every build.

Use `vite-plugin-sitemap`. In a monorepo, you can configure this in your `apps/renter-pwa/vite.config.ts` to automatically grab all your static routes and output a sitemap that you can submit to **Google Search Console**.

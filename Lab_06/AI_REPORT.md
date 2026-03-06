# AI Usage Report - Lab 06 (React Router)

**Tool:** Gemini
**Student:** Nureke 
**Date:** March 2026

## 1. Prompts Used
- "Help setup React Router v6 with Vite and TypeScript template."
- "Explain how to use Outlet for a shared layout in Lab 6.1."
- "Create a CourseDetail component with useParams and useLoaderData for Lab 6.2."
- "Fix TypeScript error: Course is a type and must be imported using a type-only import."

## 2. Modifications & Verification
- **Route Structure:** I modified the standard Vite App.tsx into a multi-page structure with a Layout component as requested in Lab 6.1.
- **Dynamic Routing:** Integrated `createBrowserRouter` instead of the older `<BrowserRouter>` component to use modern `loader` functions.
- **TS Fixes:** Manually adjusted imports to include `type` keyword to comply with `verbatimModuleSyntax` rules in tsconfig.
- **Sorting:** Implemented a `CoursesPage` with `useSearchParams` to handle sorting via URL query parameters.

## 3. Learning Outcomes
- Learned the difference between `Link` and `<a>`: Link enables client-side navigation without full page reloads.
- Understood the `loader` pattern: data can be pre-fetched before the component renders.
- Learned about dynamic route segments (`:id`) and how to access them via `useParams`.
- Mastered TypeScript strict module imports for cleaner compiled code.
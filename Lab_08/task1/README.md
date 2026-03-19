# Lab 08 - Task 1: Next.js Blog with SSR and SSG

**Student Name:** Nureke
**Date:** 19.03.2026

## SSR vs SSG Differences

* **Server-Side Rendering (SSR):** The page HTML is generated on the server on *each individual request*. This means the data is always fresh, but the Time to First Byte (TTFB) is slower because the server has to process the page before sending it to the user. It is best used for personalized content like user dashboards or real-time data.

* **Static Site Generation (SSG):**
  The page HTML is generated only once at *build time*. The pre-rendered HTML is then served to all users. This makes it extremely fast. It is best used for pages where data doesn't change often, like blog posts, documentation, or marketing pages.
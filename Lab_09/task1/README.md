# Lab 09 - Task 1: Memoization Techniques

**Student Name:** Nureke
**Date:** 19.03.2026

## Performance Optimization Strategies

In this dashboard, we applied three main React optimization hooks:

1. **React.memo (UserCard.tsx):** * **When to use:** Wrap child components that frequently re-render with the exact same props. It prevents the component from re-executing if its inputs haven't changed.
2. **useMemo (AnalyticsChart.tsx):**
   * **When to use:** Use it to cache the results of expensive, CPU-heavy calculations (like sorting large arrays or complex math). It only recalculates when its dependencies change.
3. **useCallback (Dashboard.tsx):**
   * **When to use:** Use it to memoize functions that are passed down as props to child components (especially components wrapped in `React.memo`). It ensures the function's memory reference stays the same, preventing unnecessary child re-renders.
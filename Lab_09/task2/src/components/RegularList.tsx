import { useMemo } from "react";
import { generateItems } from "../utils/generateItems";

export function RegularList({ itemCount = 10000 }: { itemCount?: number }) {
  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>Regular List (Slow 🐢)</h2>
      <div style={{ height: '500px', overflowY: 'auto', border: '2px solid #f44336', borderRadius: '8px' }}>
        {items.map(item => (
          <div key={item.id} style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
            <h4 style={{ margin: '0 0 0.5rem 0' }}>{item.title}</h4>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>{item.description}</p>
            <span style={{ background: '#e0e0e0', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
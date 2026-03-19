import { useState, useMemo } from "react";
import { Virtuoso } from "react-virtuoso";
import { generateItems } from "../utils/generateItems";

export function VirtualList() {
  const [filter, setFilter] = useState("");
  const items = useMemo(() => generateItems(10000), []);

  const filteredItems = useMemo(() => {
    return items.filter(item =>
      item.title.toLowerCase().includes(filter.toLowerCase()) ||
      item.category.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>Virtual List (Modern 🚀)</h2>
      <input
        type="text"
        placeholder="Search 10,000 items..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ width: '100%', padding: '12px', marginBottom: '15px', boxSizing: 'border-box' }}
      />
      
      <div style={{ border: '2px solid #4CAF50', borderRadius: '8px' }}>
        {/* Virtuoso сам считает высоту элементов и делает всё за тебя */}
        <Virtuoso
          style={{ height: '500px' }}
          data={filteredItems}
          itemContent={(index, item) => (
            <div style={{ padding: '15px', borderBottom: '1px solid #eee', background: 'white' }}>
              <h4 style={{ margin: '0 0 5px 0' }}>{item.title}</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>{item.description}</p>
            </div>
          )}
        />
      </div>
    </div>
  );
}
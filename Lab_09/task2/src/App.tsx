import { useState } from 'react';
import { VirtualList } from './components/VirtualList';
import { RegularList } from './components/RegularList';

function App() {
  const [showVirtual, setShowVirtual] = useState(true);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>React Virtualization Demo</h1>
      <div style={{ marginBottom: '2rem' }}>
        <button 
          onClick={() => setShowVirtual(true)}
          style={{ padding: '1rem 2rem', marginRight: '1rem', background: showVirtual ? '#4CAF50' : '#ccc', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Show Virtual List (10k items)
        </button>
        <button 
          onClick={() => setShowVirtual(false)}
          style={{ padding: '1rem 2rem', background: !showVirtual ? '#f44336' : '#ccc', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Show Regular List (10k items)
        </button>
      </div>

      {showVirtual ? <VirtualList /> : <RegularList />}
    </div>
  );
}

export default App;
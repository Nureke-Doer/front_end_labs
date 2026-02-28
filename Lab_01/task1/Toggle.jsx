import { useState } from 'react';

function Toggle() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div>
      <button onClick={() => setIsHighlighted(!isHighlighted)}>
        Toggle Highlight
      </button>
      <p className={isHighlighted ? "highlight" : ""}>
        This is a paragraph to highlight.
      </p>
      <style>{`.highlight { background: yellow; }`}</style>
    </div>
  );
}

export default Toggle;
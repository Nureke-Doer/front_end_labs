import React from 'react';

// Task 1: Переиспользуемый компонент карточки с пропсами title и children [cite: 69]
function Card({ title, children }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  );
}

// Task 3: Компонент секции, который возвращает фрагмент [cite: 81]
function Section({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
}

function App() {
  // Task 2: Массив данных о продуктах [cite: 74]
  const products = [
    { id: 1, name: "Widget", price: 9.99 },
    { id: 2, name: "Gadget", price: 19.99 }
  ];

  return (
    <Section title="Наши продукты">
      {/* Мапим продукты в компоненты Card [cite: 76] */}
      {products.map((product) => (
        <Card key={product.id} title={product.name}>
          <p>Цена: ${product.price}</p>
        </Card>
      ))}
    </Section>
  );
}

export default App;
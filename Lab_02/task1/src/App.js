import React from 'react';

// Task 2: Компонент для отображения списка элементов с использованием .map() [cite: 36, 37]
function ItemList() {
  const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" }
  ];

  return (
    <ul>
      {/* Используем key для каждого элемента списка, как требует задание [cite: 38] */}
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// Главный компонент Lab 2.1
function App() {
  const itemsCount = 3;

  return (
    // Task 1: Используем фрагмент <></>, чтобы не создавать лишних div в DOM [cite: 23, 30]
    <>
      <header>
        <h1>Fragment Layout</h1>
      </header>
      
      <main>
        <p>Этот макет использует React Fragments для группировки элементов без лишних узлов в DOM[cite: 23].</p>
        
        {/* Task 3: Комбинированный вывод заголовка, списка и итога [cite: 43] */}
        <h2>Мой список фруктов</h2>
        <ItemList />
        <p>Всего элементов: {itemsCount}</p>
      </main>

      <footer>
        <p>© 2026 Студент: Нуреке</p>
      </footer>
    </>
  );
}

export default App;
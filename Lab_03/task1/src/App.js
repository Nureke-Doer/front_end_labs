import React, { useState } from 'react';

// Компонент StepCounter принимает настройки через Props (только чтение) [cite: 137, 158]
function StepCounter({ initialValue = 0, step = 1 }) {
  // Инициализируем состояние (State) [cite: 161, 166]
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([]); // Массив для истории [cite: 167]
  const [operationCount, setOperationCount] = useState(0); // Счетчик операций [cite: 168]

  // Функция для обновления значений [cite: 169]
  const updateCount = (isIncrement) => {
    const nextValue = isIncrement ? count + step : count - step;
    
    setCount(nextValue);
    setHistory([...history, nextValue]); // Добавляем новое значение в историю [cite: 171]
    setOperationCount(prev => prev + 1); // Увеличиваем кол-во операций [cite: 172]
  };

  // Сброс состояния к начальным значениям [cite: 177, 181, 182]
  const handleReset = () => {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  return (
    <div style={{ border: '2px solid #ccc', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h2>Значение: {count}</h2> {/* [cite: 174] */}
      <p>Всего кликов: {operationCount}</p> {/* [cite: 175] */}
      
      <button onClick={() => updateCount(true)}>Увеличить (+{step})</button> {/* [cite: 163] */}
      <button onClick={() => updateCount(false)}>Уменьшить (-{step})</button>
      <button onClick={handleReset} style={{ marginLeft: '10px', color: 'red' }}>Сброс</button>

      <h4>История (последние 5):</h4>
      <ul>
        {/* Отображаем последние 5 значений из массива [cite: 176] */}
        {history.slice(-5).map((val, index) => (
          <li key={index}>Результат: {val}</li>
        ))}
      </ul>
    </div>
  );
}

// Родительский компонент CounterApp [cite: 184]
function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Lab 3.1: State & Props</h1>
      {/* Каждому счетчику передаем свои Props, состояния будут независимы [cite: 185-187] */}
      <StepCounter initialValue={0} step={1} />
      <StepCounter initialValue={10} step={5} />
      
      {/* Краткое пояснение для Task 3 [cite: 188] */}
      <p style={{ marginTop: '20px', color: 'gray' }}>
        <i>Пояснение: Props — это внешние параметры (initialValue, step), 
        а State — внутренняя память компонента (count, history), которая вызывает 
        перерисовку при изменении.</i>
      </p>
    </div>
  );
}

export default App;
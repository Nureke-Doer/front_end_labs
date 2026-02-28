import { useState } from 'react'

function App() {
  // Task 2: Создаем состояние счетчика [cite: 92]
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Counter</h1>
      {/* Отображаем текущее значение [cite: 90, 93] */}
      <p>Count is: {count}</p>
      
      {/* Кнопки инкремента и декремента [cite: 91] */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default App
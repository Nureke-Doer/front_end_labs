import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  // Состояния для данных, загрузки и ошибок [cite: 220]
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Используем AbortController для предотвращения утечек памяти [cite: 233]
    const controller = new AbortController();
    
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
          signal: controller.signal // Привязываем сигнал к fetch [cite: 234]
        });
        if (!response.ok) throw new Error('Данные не найдены');
        const data = await response.json();
        setUser(data);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message); // Игнорируем ошибку отмены [cite: 226]
      } finally {
        setLoading(false);
      }
    };

    loadData();

    // Функция очистки (Cleanup) — прерывает запрос, если компонент закрыт или ID изменился [cite: 142, 213, 234]
    return () => controller.abort(); 
  }, [userId]); // userId в массиве зависимостей: при его смене эффект запустится снова [cite: 141, 245]

  if (loading) return <h3>Загрузка...</h3>; // [cite: 228]
  if (error) return <h3 style={{ color: 'red' }}>Ошибка: {error}</h3>; // [cite: 229]

  return (
    <div style={{ border: '1px dashed blue', padding: '15px', marginTop: '10px' }}>
      {user && (
        <>
          <h3>{user.name}</h3> {/* [cite: 230] */}
          <p>Email: {user.email}</p>
          <p>Компания: {user.company?.name}</p>
        </>
      )}
    </div>
  );
}

function App() {
  const [userId, setUserId] = useState(1); // Состояние для текущего ID [cite: 247]

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lab 3.2: Data Fetching (useEffect)</h1>
      
      {/* Кнопки для смены ID пользователя [cite: 249] */}
      <button onClick={() => setUserId(1)}>User 1</button>
      <button onClick={() => setUserId(2)}>User 2</button>
      <button onClick={() => setUserId(3)}>User 3</button>
      <button onClick={() => setUserId(Math.floor(Math.random() * 10) + 1)} style={{ marginLeft: '10px' }}>
        Случайный (Refresh)
      </button>

      <UserProfile userId={userId} />

      {/* Пояснение для Task 3 [cite: 250] */}
      <p style={{ marginTop: '20px', fontSize: '14px' }}>
        <b>Почему userId в массиве зависимостей?</b> Потому что мы хотим, 
        чтобы эффект (запрос к API) срабатывал каждый раз, когда меняется входной проп userId. [cite: 251]
      </p>
    </div>
  );
}

export default App;
import React, { useState } from 'react';

function RegistrationForm() {
  // Состояния для полей (Task 1) [cite: 335]
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  // Состояния для ошибок (Task 1) [cite: 336]
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [success, setSuccess] = useState(false);

  // Функции валидации (Task 2) [cite: 350-355]
  const validateName = (val) => val.length >= 2 ? '' : 'Name must be at least 2 chars';
  const validateEmail = (val) => /^[\s@]+@[\s@]+\.[\s@]+$/.test(val) ? '' : 'Invalid email format';
  const validateAge = (val) => (Number(val) >= 18) ? '' : 'Must be at least 18 years old';

  const handleSubmit = (e) => {
    e.preventDefault(); // Останавливаем перезагрузку страницы (Task 3) [cite: 323, 366]
    
    // Проверка всех полей перед отправкой [cite: 368]
    const nErr = validateName(name);
    const eErr = validateEmail(email);
    const aErr = validateAge(age);

    setNameError(nErr);
    setEmailError(eErr);
    setAgeError(aErr);

    if (!nErr && !eErr && !aErr) {
      setSuccess(true); // Успех! [cite: 370]
      setName(''); setEmail(''); setAge(''); // Очистка полей [cite: 372]
    } else {
      setSuccess(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Registration Form</h2>
      {success && <p style={{ color: 'green' }}>Registration successful!</p>}
      
      <form onSubmit={handleSubmit}>
        {/* Поле имени с обработчиком onChange [cite: 338, 357] */}
        <div>
          <input 
            type="text" placeholder="Name" value={name} 
            onChange={(e) => { setName(e.target.value); setNameError(validateName(e.target.value)); }} 
          />
          {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
        </div>

        {/* Поле Email [cite: 339] */}
        <div>
          <input 
            type="email" placeholder="Email" value={email} 
            onChange={(e) => { setEmail(e.target.value); setEmailError(validateEmail(e.target.value)); }} 
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>

        {/* Поле возраста [cite: 340] */}
        <div>
          <input 
            type="number" placeholder="Age" value={age} 
            onChange={(e) => { setAge(e.target.value); setAgeError(validateAge(e.target.value)); }} 
          />
          {ageError && <p style={{ color: 'red' }}>{ageError}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
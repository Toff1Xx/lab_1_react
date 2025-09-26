// src/App.jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Profile from './components/Profile';
import './App.css';
import shelly from './assets/avatars/shelly.png';
import colt from './assets/avatars/colt.png';
import jessie from './assets/avatars/jessie.png';
import bull from './assets/avatars/bull.png';
import nita from './assets/avatars/nita.png';

function App() {
  // Lab 1: лічильник
  const [count, setCount] = useState(0);

  // Lab 2: масив користувачів
 const users = [
  { name: 'Олександр', role: 'Фронтенд розробник', avatarUrl: shelly },
  { name: 'Марія', role: 'Бекенд розробник', avatarUrl: colt },
  { name: 'Іван', role: 'UI/UX дизайнер', avatarUrl: jessie },
  { name: 'Катерина', role: 'Менеджер проєкту', avatarUrl: bull },
  { name: 'Тарас', role: 'QA інженер', avatarUrl: nita },
];


  return (
    <>
      {/* Lab 1 */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}> count is {count} </button>
        <p> Edit <code>src/App.jsx</code> and save to test HMR </p>
      </div>

      <p className="read-the-docs"> Click on the Vite and React logos to learn more </p>

      {/* Lab 2 */}
      <h2>Users Profiles</h2>
      <div className="profiles-container">
        {users.map((user, index) => (
          <Profile key={index} name={user.name} role={user.role} avatarUrl={user.avatarUrl} />
        ))}
      </div>
    </>
  );
}

export default App;

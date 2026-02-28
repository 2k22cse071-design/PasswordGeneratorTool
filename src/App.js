import React, { useState } from 'react';
import PasswordForm from './components/PasswordForm';
import PasswordDisplay from './components/PasswordDisplay';
import { generatePassword } from './utils/generatePassword';

function App() {
  const [password, setPassword] = useState('');
  const [config, setConfig] = useState({
    length: 12,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false
  });

  const handleGenerate = () => {
    const newPassword = generatePassword(config.length, config);
    setPassword(newPassword);
  };

  return (
    <div className="app-container">
      <h1>Password Generator</h1>
      <PasswordDisplay password={password} onGenerate={handleGenerate} />
      <PasswordForm config={config} setConfig={setConfig} />
    </div>
  );
}

export default App;

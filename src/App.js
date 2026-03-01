import React, { useState } from 'react';
import PasswordForm from './components/PasswordForm';
import PasswordDisplay from './components/PasswordDisplay';
import StrengthIndicator from './components/StrengthIndicator';
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
      <div className="password-card">
        <h1>Password Generator </h1>
        <PasswordDisplay password={password} onGenerate={handleGenerate} />
        <StrengthIndicator password={password} config={config} />
        <hr className="divider" />
        <PasswordForm config={config} setConfig={setConfig} />
      </div>
    </div>
  );
}

export default App;


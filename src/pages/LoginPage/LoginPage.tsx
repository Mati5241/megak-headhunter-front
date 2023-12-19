import React, { useState } from 'react';
import './LoginPage.css'


const LoginPage: React.FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Do something with the login data (e.g., send it to a server)
    console.log(`Login: ${login}, Password: ${password}`);
  };

  const handleRegister = () => {
    // Registration logic
  };

  const handleForgotPassword = () => {
    // Forgot password logic
  };

  return (
    <div className="login-container">
      <img className="logo" src="logo2.webp" alt="Logo" />
      <div>
        <input
          className="input-field"
          type="text"
          placeholder="Login"
          value={login}
          onChange={handleLoginChange}
        />
      </div>
      <div>
        <input
          className="input-field"
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="button-container">
        <button className="login-button" onClick={handleLogin}>
          Zaloguj się
        </button>
        <button className="register-button" onClick={handleRegister}>
          Zarejestruj się
        </button>
      </div>
      <div>
        <button className="forgot-password-button" onClick={handleForgotPassword}>
          Zapomniałeś hasła?
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
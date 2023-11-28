import React from 'react';
import './LoginPage.css'


const LoginPage: React.FC = () => {
    return (
      <div className="login-container">
          <img className="logo" src="logo2.webp" alt="Logo" />
          <div>
          <input className="input-field" type="text" placeholder="E-mail" />
        </div>
        <div>
          <input className="input-field" type="password" placeholder="Hasło" />
        </div>
        <div className="button-container">
        <button className="login-button">Zaloguj się</button>
      <button className="register-button">Zarejestruj się</button>
      </div>
      <div>
        <button className="forgot-password-button">Zapomniałeś hasła?</button>
      </div>
    </div>
      );
    };
export default LoginPage;

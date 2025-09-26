import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  // Em uma aplicação real, aqui você faria a lógica de autenticação
  const handleLogin = (userType) => {
    console.log(`Logando como: ${userType}`);
    // Por enquanto, qualquer login leva para a página principal
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Go Motors BR</h1>
        <p>Selecione seu tipo de acesso</p>
        <div className="button-group">
          <button onClick={() => handleLogin('comprador')} className="login-button">
            Login Comprador
          </button>
          <button onClick={() => handleLogin('vendedor')} className="login-button">
            Login Vendedor
          </button>
          <button onClick={() => handleLogin('visitante')} className="login-button visitor">
            Entrar como Visitante
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
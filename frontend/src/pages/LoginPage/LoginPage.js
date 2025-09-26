import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  // Em uma aplicação real, aqui você faria a lógica de autenticação
  const handleLogin = (userType) => {
    login(userType);
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
        <p className="signup-link">
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
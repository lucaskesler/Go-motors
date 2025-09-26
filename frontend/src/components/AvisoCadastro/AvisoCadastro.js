import React from 'react';
import { Link } from 'react-router-dom';
import './AvisoCadastro.css';

function AvisoCadastro({ pagina }) {
  return (
    <div className="aviso-container">
      <h2>Acesso Restrito</h2>
      <p>Para acessar a página de <strong>{pagina}</strong>, você precisa estar logado.</p>
      <Link to="/login" className="login-button">Fazer Login</Link>
      <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se agora!</Link></p>
    </div>
  );
}

export default AvisoCadastro;
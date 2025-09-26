import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './CadastroPage.css';

function CadastroPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ nome: '', email: '', senha: '' });
  const [userType, setUserType] = useState('comprador'); // 'comprador' ou 'vendedor'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // AQUI: Lógica para enviar os dados para a API de cadastro do backend
    console.log('Cadastrando usuário:', { ...formData, role: userType });
    alert('Cadastro realizado com sucesso! (Simulação). Você será redirecionado para o login.');
    navigate('/login');
  };

  return (
    <div>
      <Header />
      <main className="main-content">
        <div className="cadastro-container">
          <h2>Crie sua Conta</h2>
          <div className="user-type-selector">
            <button onClick={() => setUserType('comprador')} className={userType === 'comprador' ? 'active' : ''}>
              Quero Comprar
            </button>
            <button onClick={() => setUserType('vendedor')} className={userType === 'vendedor' ? 'active' : ''}>
              Quero Vender
            </button>
          </div>
          <form onSubmit={handleSubmit} className="cadastro-form">
            <input name="nome" type="text" placeholder="Nome Completo" onChange={handleChange} required />
            <input name="email" type="email" placeholder="Seu melhor e-mail" onChange={handleChange} required />
            <input name="senha" type="password" placeholder="Crie uma senha" onChange={handleChange} required />
            <button type="submit" className="submit-button">Cadastrar</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CadastroPage;
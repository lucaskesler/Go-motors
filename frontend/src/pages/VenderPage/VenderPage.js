import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './VenderPage.css';

function VenderPage() {
  const navigate = useNavigate();
  const [veiculo, setVeiculo] = useState({
    marca: '',
    modelo: '',
    ano_fabricacao: '',
    ano_modelo: '',
    quilometragem: '',
    preco: '',
    descricao: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVeiculo({ ...veiculo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validação simples
    for (const key in veiculo) {
      if (veiculo[key] === '' && key !== 'descricao') {
        setError('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
    }

    try {
      await axios.post('http://localhost:8000/api/veiculos/', veiculo);
      setSuccess('Veículo cadastrado com sucesso! Redirecionando...');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      setError('Ocorreu um erro ao cadastrar o veículo. Tente novamente.');
      console.error(err);
    }
  };

  return (
    <div>
      <Header />
      <main className="main-content">
        <div className="sell-form-container">
          <h2>Anuncie seu Veículo</h2>
          <p>Preencha os dados abaixo para criar seu anúncio.</p>
          <form onSubmit={handleSubmit} className="sell-form">
            <div className="form-row">
              <input name="marca" value={veiculo.marca} onChange={handleChange} placeholder="Marca (ex: BMW)" />
              <input name="modelo" value={veiculo.modelo} onChange={handleChange} placeholder="Modelo (ex: M2)" />
            </div>
            <div className="form-row">
              <input name="ano_fabricacao" type="number" value={veiculo.ano_fabricacao} onChange={handleChange} placeholder="Ano de Fabricação" />
              <input name="ano_modelo" type="number" value={veiculo.ano_modelo} onChange={handleChange} placeholder="Ano do Modelo" />
            </div>
            <div className="form-row">
              <input name="quilometragem" type="number" value={veiculo.quilometragem} onChange={handleChange} placeholder="Quilometragem" />
              <input name="preco" type="number" step="0.01" value={veiculo.preco} onChange={handleChange} placeholder="Preço (ex: 250000.00)" />
            </div>
            <textarea name="descricao" value={veiculo.descricao} onChange={handleChange} placeholder="Descrição (opcional)" />
            {error && <p className="form-message error">{error}</p>}
            {success && <p className="form-message success">{success}</p>}
            <button type="submit" className="submit-button">Anunciar Veículo</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default VenderPage;
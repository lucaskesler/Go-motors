import React from 'react';
import './VehicleList.css';

function VehicleList({ veiculos }) {
  // Formata o preço para o padrão brasileiro
  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <ul className="vehicle-list">
      {veiculos.map(veiculo => (
        <li key={veiculo.id} className="vehicle-item">
          {/* Adicionar imagem aqui no futuro */}
          <div className="vehicle-info">
            <h3>{veiculo.marca} {veiculo.modelo}</h3>
            <p>Ano: {veiculo.ano_modelo} | KM: {veiculo.quilometragem.toLocaleString('pt-BR')}</p>
            <p className="price">{formatPrice(veiculo.preco)}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default VehicleList;
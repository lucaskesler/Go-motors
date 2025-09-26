import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import VehicleList from '../../components/VehicleList/VehicleList';
import './HomePage.css';

function HomePage() {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    const fetchVeiculos = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/veiculos/');
        setVeiculos(response.data);
      } catch (error) {
        console.error("Erro ao buscar veículos:", error);
      }
    };

    fetchVeiculos();
  }, []);

  return (
    <div>
      <Header />
      <main className="main-content">
        {veiculos.length > 0 ? (
          <VehicleList veiculos={veiculos} />
        ) : (
          <p>Nenhum veículo encontrado. Adicione um no painel de admin do Django!</p>
        )}
      </main>
    </div>
  );
}

export default HomePage;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importa as páginas
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import VenderPage from './pages/VenderPage/VenderPage';
import ServicosPage from './pages/ServicosPage/ServicosPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/vender" element={<VenderPage />} />
        <Route path="/servicos" element={<ServicosPage />} />
      </Routes>
    </Router>
  );
}

export default App;

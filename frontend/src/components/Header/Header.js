import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/" className="logo">Go Motors BR</Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/" className="nav-link active">Comprar</Link></li>
            <li><Link to="/vender" className="nav-link">Vender</Link></li>
            <li><Link to="/servicos" className="nav-link">Serviços</Link></li>
          </ul>
        </nav>
        <div className="user-actions">
          <Link to="/login" className="logout-button">Sair</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/" className="logo">Go Motors BR</Link>
        <nav>
          <ul className="nav-links">
            <li><NavLink to="/" className="nav-link">Comprar</NavLink></li>
            <li><NavLink to="/vender" className="nav-link">Vender</NavLink></li>
            <li><NavLink to="/servicos" className="nav-link">Serviços</NavLink></li>
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
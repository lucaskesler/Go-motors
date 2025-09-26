import React from 'react';
import Header from '../../components/Header/Header';
import AvisoCadastro from '../../components/AvisoCadastro/AvisoCadastro';
import { useAuth } from '../../context/AuthContext';

function ServicosPage() {
  const { user } = useAuth();

  return (
    <div>
      <Header />
      {user.role === 'convidado' ? (
        <main className="main-content">
          <AvisoCadastro pagina="Serviços" />
        </main>
      ) : (
        <main className="main-content" style={{ textAlign: 'center', paddingTop: '50px' }}>
          <h1>Nossos Serviços</h1>
          <p>Página em construção. Em breve, você encontrará aqui nossos serviços especializados!</p>
        </main>
      )}
    </div>
  );
}

export default ServicosPage;
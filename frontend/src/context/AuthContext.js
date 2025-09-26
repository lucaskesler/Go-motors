import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState({ role: 'convidado' }); // 'convidado', 'comprador', 'vendedor'

  // Em uma aplicação real, a função de login faria uma chamada à API
  const login = (role) => {
    setUser({ role: role });
  };

  const logout = () => {
    setUser({ role: 'convidado' });
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
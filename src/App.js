import React, { useState } from 'react';
import './App.css'; // Importando o CSS separado

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para o envio do formulário
    console.log('Login: ', username, password);
  };

  return (
    <div className="container">
      <h2 className="title">Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputGroup">
          <label className="label" htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="inputGroup">
          <label className="label" htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />
        </div>
        <button type="submit" className="button">Entrar</button>
      </form>
      <div className="links">
        <a href="/forgot-password" className="link">Esqueceu a senha?</a>
        <a href="/register" className="link">Registrar-se</a>
      </div>
    </div>
  );
};

export default LoginPage;

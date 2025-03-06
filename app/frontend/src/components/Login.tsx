import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/slices/userSlice';

import '../styles/Login.scss';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, rememberMe }),
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(login(data)); // Salva token no Redux
        navigate('/'); // Redireciona para a Home
      } else {
        setError("Credenciais inválidas. Verifique seu usuário e senha.");
      }
    } catch (err) {
      setError("Erro de conexão. Tente novamente.");
      console.error(err);
    }
  };

  return (
    <div className="login-background">
      <div className="login-box">
        <h2>Login</h2>
        
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <span className="icon">
              <i className="fas fa-user"></i>
            </span>
            <input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-field">
            <span className="icon">
              <i className="fas fa-lock"></i>
            </span>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Lembrar-me
            </label>
            <a href="#forgot" className="forgot-link">
              Esqueci minha senha?
            </a>
          </div>

          <button type="submit" className="login-btn">Entrar</button>
        </form>

        <div className="register">
          Não possui conta? <a href="#register">Registre-se</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
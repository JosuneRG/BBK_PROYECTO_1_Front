import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Asegúrate de importar Link
import "../styles/Login.scss";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor ingresa email y contraseña");
      return;
    }

    if (email === 'test@test.com' && password === 'test123') {
      setError('');
      alert('¡Login exitoso!');
      navigate('/profile');
    } else {
      setError("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Contraseña</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Entrar</button>

        {/* Mensaje de error si existe */}
        {error && <p className="error">{error}</p>}

        {/* Enlace de registro */}
        <p className="register-link">
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

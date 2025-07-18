import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos para redireccionar

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para redirigir

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor ingresa email y contraseña");
      return;
    }

    if (email === 'test@test.com' && password === 'test123') {
      setError('');
      alert('¡Login exitoso!');
      navigate('/'); // Redirige a Home u otra ruta que quieras
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
      </form>
    </div>
  )
}

export default Login;


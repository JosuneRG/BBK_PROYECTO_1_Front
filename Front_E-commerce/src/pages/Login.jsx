import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor ingresa email y contraseña');
      return;
    }

    if (email === 'test@test.com' && password === 'test123') {
      setError('');
      alert('¡Login exitoso!');
    } else {
      setError('Email o contraseña incorrectos');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bienvenido a BookStore 📚</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        {error && <p style={styles.error}>{error}</p>}

        <button type="submit" style={styles.button}>Iniciar Sesión</button>
      </form>

      <div style={styles.footer}>
        <a href="#" style={styles.link}>¿Olvidaste tu contraseña?</a>
        <p style={{ marginTop: 12, color: '#555' }}>
          ¿No tienes cuenta?{' '}
          <a href="#" style={styles.link}>Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 400,
    margin: '60px auto',
    padding: '30px 25px',
    borderRadius: 12,
    backgroundColor: '#f9f6f2',
    boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: 'center',
    boxSizing: 'border-box',
  },
  title: {
    color: '#3a3a3a',
    marginBottom: 25,
    fontWeight: '700',
    fontSize: 24,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: 14,
    marginBottom: 18,
    fontSize: 16,
    borderRadius: 8,
    border: '1.8px solid #c4b495',
    outlineColor: '#a67c00',
    transition: 'border-color 0.3s',
  },
  button: {
    padding: 14,
    fontSize: 18,
    borderRadius: 8,
    border: 'none',
    backgroundColor: '#a67c00',
    color: 'white',
    cursor: 'pointer',
    fontWeight: '600',
    boxShadow: '0 4px 8px rgba(166,124,0,0.5)',
    transition: 'background-color 0.3s',
  },
  error: {
    color: '#b00020',
    marginBottom: 20,
    fontWeight: '600',
  },
  footer: {
    marginTop: 25,
    fontSize: 14,
    color: '#777',
  },
  link: {
    color: '#a67c00',
    textDecoration: 'none',
    fontWeight: '600',
    cursor: 'pointer',
  },
};

export default Login;

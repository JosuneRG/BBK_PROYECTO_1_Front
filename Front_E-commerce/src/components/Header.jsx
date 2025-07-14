import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';   // Ajusta ruta si es necesario
import { CartContext } from '../context/CartContext';   // Ajusta ruta si es necesario

function Header() {
  const { user, logout } = useContext(AuthContext);  // Usuario autenticado
  const { cartItems } = useContext(CartContext);     // Items en carrito
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Librería BBK 📚</h1>

      <nav style={styles.nav}>
        <NavLink to="/" style={styles.link} activeStyle={styles.activeLink} end>
          Home
        </NavLink>
        <NavLink to="/products" style={styles.link} activeStyle={styles.activeLink}>
          Productos
        </NavLink>
        <NavLink to="/cart" style={styles.link} activeStyle={styles.activeLink}>
          Carrito ({cartItems.length})
        </NavLink>

        {user ? (
          <>
            <NavLink to="/profile" style={styles.link} activeStyle={styles.activeLink}>
              {user.name || 'Perfil'}
            </NavLink>
            <button onClick={handleLogout} style={styles.logoutButton}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" style={styles.link} activeStyle={styles.activeLink}>
              Login
            </NavLink>
            <NavLink to="/register" style={styles.link} activeStyle={styles.activeLink}>
              Registrarse
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 24px',
    backgroundColor: '#a67c00',
    color: '#fff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  logo: {
    fontSize: 24,
    fontWeight: '700',
    cursor: 'pointer',
  },
  nav: {
    display: 'flex',
    gap: '18px',
    alignItems: 'center',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: 16,
  },
  activeLink: {
    borderBottom: '2px solid #fff',
  },
  logoutButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: 16,
  },
};

export default Header;

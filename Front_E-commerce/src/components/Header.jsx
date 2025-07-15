import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext'

function Header() {
  const { user, logout } = useContext(AuthContext)
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Librería BBK 📚</h1>

      <nav style={styles.nav}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
          end
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          Productos
        </NavLink>

        <NavLink
          to="/cart"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          Carrito ({cartItems.length})
        </NavLink>

        {user ? (
          <>
            <NavLink
              to="/profile"
              style={({ isActive }) =>
                isActive ? { ...styles.link, ...styles.activeLink } : styles.link
              }
            >
              {user.name || 'Perfil'}
            </NavLink>
            <button onClick={handleLogout} style={styles.logoutButton}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              style={({ isActive }) =>
                isActive ? { ...styles.link, ...styles.activeLink } : styles.link
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              style={({ isActive }) =>
                isActive ? { ...styles.link, ...styles.activeLink } : styles.link
              }
            >
              Registrarse
            </NavLink>
          </>
        )}
      </nav>
    </header>
  )
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
}

export default Header

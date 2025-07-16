import { Link } from 'react-router-dom';

import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext'

function Header() {
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

export default Header;

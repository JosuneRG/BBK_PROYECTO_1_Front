import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext'

function Header() {
  return (
    <header className="header">
      <div className="nav">
        <div className="nav-left">
          <Link to="/" className="home-link">📚 Librería BBK</Link>
        </div>
        <div className="nav-right">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/profile">Mi Perfil</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;

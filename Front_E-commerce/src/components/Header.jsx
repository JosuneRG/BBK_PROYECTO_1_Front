import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext'

function Header() {
  return (
    <header>
      <h1>Librería BBK</h1>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/login">Login</Link> | 
        <Link to="/register">Register</Link>
      </nav>
    </header>
  )
}

export default Header;

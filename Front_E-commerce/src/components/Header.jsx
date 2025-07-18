import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import "../styles/Header.scss";

function Header() {
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <NavLink to="/" className="home-link">
            📚 Librería BBK
          </NavLink>
        </div>

        <div className="nav-center">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">
            Carrito ({cartItems.length})
          </NavLink>
        </div>

        <div className="nav-right">
          {user ? (
            <>
              <NavLink to="/profile">{user.name || "Perfil"}</NavLink>
              <button onClick={logout} style={{marginLeft: "1rem", cursor: "pointer"}}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;

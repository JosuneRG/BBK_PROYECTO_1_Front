import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
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

        <div className="nav-right">
          <NavLink to="/cart" className="icon-link">
            <FaShoppingCart size={22} />
            <span className="cart-count">{cartItems.length}</span>
          </NavLink>

          {user ? (
            <>
              <NavLink to="/profile" className="icon-link">
                <FaUserCircle size={22} />
              </NavLink>
              <button onClick={logout} className="logout-btn">Salir</button>
            </>
          ) : (
            <NavLink to="/login" className="icon-link">
              <FaUserCircle size={22} />
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;

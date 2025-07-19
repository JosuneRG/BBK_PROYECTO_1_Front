import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { useFavoritos } from "../context/FavoritosContext";
import { FaUserCircle, FaShoppingCart, FaHeart } from "react-icons/fa";
import "../styles/Header.scss";

function Header() {
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const { favoritos } = useFavoritos();

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <NavLink to="/" className="home-link">
            📚 Librería BBK
          </NavLink>
        </div>

        <div className="nav-right">
          {/* Ícono de favoritos con contador */}
          <NavLink to="/favoritos" className="icon-link" style={{ position: "relative" }}>
            <FaHeart size={22} color="red" />
            {favoritos.length > 0 && (
              <span className="favoritos-count">{favoritos.length}</span>
            )}
          </NavLink>

          {/* Ícono del carrito */}
          <NavLink to="/cart" className="icon-link" style={{ position: "relative" }}>
            <FaShoppingCart size={22} />
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </NavLink>

          {/* Usuario autenticado o login */}
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

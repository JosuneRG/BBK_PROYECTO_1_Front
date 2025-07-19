import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext"; // Para obtener el usuario
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Cart.scss";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, getTotal } = useContext(CartContext);
  const { user } = useContext(AuthContext);  // Usuario logueado
  const navigate = useNavigate();

  const total = getTotal();

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("El carrito está vacío, no hay nada para comprar.");
      return;
    }

    if (!user) {
      alert("Debes iniciar sesión para finalizar el pedido.");
      navigate("/login");
      return;
    }

    try {
      // Enviar pedido al backend
      const response = await axios.post("http://localhost:4000/api/orders", {
        userId: user.id,   // Asegúrate que user.id está definido
        items: cartItems,
        total,
      });

      alert("¡Gracias por tu compra! Tu pedido ha sido procesado.");
      clearCart();
      navigate("/profile");
    } catch (error) {
      console.error("Error al crear pedido:", error);
      alert("Hubo un error al procesar tu pedido.");
    }
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2>Tu carrito</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart">El carrito está vacío.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h3>{item.title || item.name}</h3>
                    <p>Precio: {item.price} €</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn-remove"
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <strong>Total: {total} €</strong>
            </div>
            <div className="cart-actions">
              <button onClick={handleCheckout} className="btn-checkout">
                Finalizar pedido
              </button>
              <button onClick={clearCart} className="btn-clear">
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.scss";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => {
    const priceNumber = Number(String(item.price).replace("$", "")) || 0;
    return acc + priceNumber;
  }, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("El carrito está vacío, no hay nada para comprar.");
      return;
    }
    alert("¡Gracias por tu compra! Tu pedido ha sido procesado.");
    clearCart();
    navigate("/");
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
                    <h3>{item.title}</h3>
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
}

export default Cart;
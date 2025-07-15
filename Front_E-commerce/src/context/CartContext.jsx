import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([{ id: 1, name: 'Producto 1', price: 10 }, { id: 2, name: 'Producto 2', price: 20 }, { id: 3, name: 'Producto 3', price: 15 }]);

  // Añadir producto
  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  // Eliminar producto por id
  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  // Vaciar carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Calcular total
  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price || 0), 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
}

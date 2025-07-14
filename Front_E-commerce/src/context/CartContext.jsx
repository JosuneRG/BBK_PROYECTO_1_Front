import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Simulamos que hay 3 items en el carrito
  const [cartItems, setCartItems] = useState([{id:1}, {id:2}, {id:3}]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

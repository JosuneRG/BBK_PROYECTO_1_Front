// src/context/OrderContext.jsx
import React, { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  // Crear un pedido nuevo con id, fecha y productos
  const createOrder = (products) => {
    const newOrder = {
      id: Date.now(), // id simple usando timestamp
      date: new Date().toLocaleString(),
      products,
    };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  // (Opcional) obtener todos los pedidos
  const getOrders = () => orders;

  return (
    <OrderContext.Provider value={{ orders, createOrder, getOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

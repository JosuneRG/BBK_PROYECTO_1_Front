import React, { createContext, useContext, useState } from "react";

const FavoritosContext = createContext();

export const useFavoritos = () => useContext(FavoritosContext);

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (producto) => {
    setFavoritos((prev) =>
      prev.some((item) => item.id === producto.id)
        ? prev.filter((item) => item.id !== producto.id)
        : [...prev, producto]
    );
  };

  const isFavorito = (productoId) => favoritos.some((item) => item.id === productoId);

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito, isFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

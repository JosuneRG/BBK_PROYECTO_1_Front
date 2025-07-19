import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Asegúrate de tener react-icons instalado

const FavoritoIcon = ({ isFavorito, onClick }) => {
  return (
    <span
      className="favorito-icon"
      onClick={onClick}
      style={{ cursor: "pointer", color: isFavorito ? "red" : "gray" }}
      title="Añadir a favoritos"
    >
      {isFavorito ? <FaHeart /> : <FaRegHeart />}
    </span>
  );
};

export default FavoritoIcon

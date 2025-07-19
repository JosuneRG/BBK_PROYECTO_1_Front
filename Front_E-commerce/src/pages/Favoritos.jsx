import React from "react";
import { useFavoritos } from "../context/FavoritosContext";
import "../styles/Favoritos.scss";

const Favoritos = () => {
  const { favoritos, toggleFavorito } = useFavoritos();

  return (
    <div className="favoritos-container">
      <h2>Mis Favoritos ❤️</h2>

      {favoritos.length === 0 ? (
        <p>No tienes libros favoritos aún.</p>
      ) : (
        <div className="favoritos-list">
          {favoritos.map((book) => (
            <div key={book.id} className="favoritos-card">
              <img src={book.image} alt={book.title} />
              <div className="favoritos-info">
                <h3>{book.title}</h3>
                <p>{book.price} €</p>
                <button
                  onClick={() => toggleFavorito(book)}
                  className="btn-toggle-favoritos"
                >
                  Quitar de favoritos
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;

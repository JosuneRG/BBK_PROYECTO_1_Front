import React, { useContext, useState } from "react";
import "../styles/Home.scss";
import { CartContext } from "../context/CartContext";

// Agrega el campo "genre" a cada libro
const featuredBooks = [
  { id: 1, title: "Cien Años de Soledad", price: 20, genre: "Realismo mágico", image: "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg" },
  { id: 2, title: "Don Quijote", price: 18, genre: "Clásico", image: "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL.jpg" },
  { id: 3, title: "Harry Potter y la Piedra Filosofal", price: 22, genre: "Fantasía", image: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg" },
  { id: 4, title: "El Señor de los Anillos", price: 25, genre: "Fantasía", image: "https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg" },
  { id: 5, title: "El Hobbit", price: 20, genre: "Fantasía", image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg" },
  { id: 6, title: "El Alquimista", price: 21, genre: "Filosofía", image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg" },
  { id: 7, title: "La Odisea", price: 17, genre: "Aventura", image: "https://m.media-amazon.com/images/I/81gTwYAhU7L._AC_UF1000,1000_QL80_.jpg" },
  { id: 8, title: "Orgullo y Prejuicio", price: 16, genre: "Romance", image: "https://m.media-amazon.com/images/I/81OthjkJBuL._AC_UF1000,1000_QL80_.jpg" },
  { id: 9, title: "La ladrona de libros", price: 16, genre: "Drama", image: "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UF1000,1000_QL80_.jpg" },
  { id: 10, title: "El Gran Gatsby", price: 15, genre: "Clásico", image: "https://m.media-amazon.com/images/I/81af+MCATTL._AC_UY436_FMwebp_QL65_.jpg" },
  { id: 11, title: "Fahrenheit 451", price: 18, genre: "Ciencia ficción", image: "https://m.media-amazon.com/images/I/71OFqSRFDgL._AC_UF1000,1000_QL80_.jpg" },
  { id: 12, title: "El guardián entre el centeno", price: 16, genre: "Clásico", image: "https://m.media-amazon.com/images/I/81OthjkJBuL._AC_UY436_FMwebp_QL65_.jpg" },
];

export default function Home() {
  const { addToCart } = useContext(CartContext);
  const [maxPrice, setMaxPrice] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const filteredBooks = featuredBooks.filter((book) => {
    const matchesPrice = maxPrice === "" || book.price <= Number(maxPrice);
    const matchesTitle = book.title.toLowerCase().includes(searchTitle.toLowerCase());
    const matchesGenre = selectedGenre === "" || book.genre === selectedGenre;
    return matchesPrice && matchesTitle && matchesGenre;
  });

  const genres = [...new Set(featuredBooks.map((book) => book.genre))];

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Librería BBK 📚</h1>
          <p>Encuentra tus libros favoritos al mejor precio</p>
        </div>
      </section>

      <section className="filters-section">
        <aside className="filters">
          <h3>Filtrar por:</h3>

          <label>Precio máximo:</label>
          <input
            type="number"
            placeholder="Ej: 20"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />

          <label>Búsqueda por título:</label>
          <input
            type="text"
            placeholder="Ej: Hobbit"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />

          <label>Género:</label>
          <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="">Todos</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </aside>

        <div className="featured">
          <h2>Libros Destacados</h2>
          <div className="books-grid">
            {filteredBooks.map((book) => (
              <div key={book.id} className="book-card">
                <img src={book.image} alt={book.title} />
                <h3>{book.title}</h3>
                <p>{book.price} €</p>
                <button className="btn-add-cart" onClick={() => addToCart(book)}>
                  Añadir al carrito
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

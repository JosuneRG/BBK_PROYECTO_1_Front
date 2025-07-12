// src/pages/Home.jsx
import "../styles/Home.scss";

const featuredBooks = [
  { id: 1, title: "Cien Años de Soledad", price: "$20", image: "https://via.placeholder.com/150" },
  { id: 2, title: "Don Quijote", price: "$18", image: "https://via.placeholder.com/150" },
  { id: 3, title: "El Principito", price: "$15", image: "https://via.placeholder.com/150" },
];

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Bienvenido a Librería BBK 📚</h1>
        <p>Encuentra tus libros favoritos al mejor precio</p>
      </section>

      <section className="featured">
        <h2>Libros Destacados</h2>
        <div className="books-grid">
          {featuredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

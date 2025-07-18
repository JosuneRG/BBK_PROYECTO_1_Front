import React, { useContext } from "react";
import "../styles/Home.scss";
import { CartContext } from "../context/CartContext";

const featuredBooks = [
  {
    id: 1,
    title: "Cien Años de Soledad",
    price: 20,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg",
  },
  {
    id: 2,
    title: "Don Quijote",
    price: 18,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL.jpg",
  },
  {
    id: 3,
    title: "Harry Potter y la Piedra Filosofal",
    price: 22,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
  },
  {
    id: 4,
    title: "El Señor de los Anillos",
    price: 25,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg",
  },
  {
    id: 5,
    title: "El Hobbit",
    price: 20,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
  },
  {
    id: 6,
    title: "El Alquimista",
    price: 21,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
  },
{
  id: 7,
  title: "La Odisea",
  price: 17,
  image: "https://m.media-amazon.com/images/I/81gTwYAhU7L._AC_UF1000,1000_QL80_.jpg",
},
{
  id: 8,
  title: "Orgullo y Prejuicio",
  price: 16,
  image: "https://m.media-amazon.com/images/I/81OthjkJBuL._AC_UF1000,1000_QL80_.jpg",
},
{
  id: 9,
  title: "La ladrona de libros",
  price: 16,
  image: "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UF1000,1000_QL80_.jpg",
  },
{
  id: 10,
  title: "El Gran Gatsby",
  price: 15,
  image: "https://m.media-amazon.com/images/I/81af+MCATTL._AC_UY436_FMwebp_QL65_.jpg",
  },
{
  id: 11,
  title: "Fahrenheit 451",
  price: 18,
  image: "https://m.media-amazon.com/images/I/71OFqSRFDgL._AC_UF1000,1000_QL80_.jpg",
},
{
  id: 12,
  title: "El guardián entre el centeno",
  price: 16,
  image: "https://m.media-amazon.com/images/I/81OthjkJBuL._AC_UY436_FMwebp_QL65_.jpg",
  },
];

export default function Home() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Librería BBK 📚</h1>
          <p>Encuentra tus libros favoritos al mejor precio</p>
        </div>
      </section>

      <section className="featured">
        <h2>Libros Destacados</h2>
        <div className="books-grid">
          {featuredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.price} €</p>
              {/* Botón "Ver más" eliminado */}
              <button
                className="btn-add-cart"
                onClick={() => addToCart(book)}
              >
                Añadir al carrito
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

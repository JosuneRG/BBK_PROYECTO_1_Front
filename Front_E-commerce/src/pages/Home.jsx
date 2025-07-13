import "../styles/Home.scss";

const featuredBooks = [
  {
    id: 1,
    title: "Cien Años de Soledad",
    price: "$20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg",
  },
  {
    id: 2,
    title: "Don Quijote",
    price: "$18",
    image: "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL.jpg",
  },
  {
    id: 3,
    title: "Harry Potter y la Piedra Filosofal",
    price: "$22",
    image: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
  },

{
  id: 4,
  title: "El Señor de los Anillos",
  price: "$25",
  image: "https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg",
},

 {
    id: 5,
    title: "El Hobbit",
    price: "$20",
    image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
  },
  {
    id: 6,
    title: "El Alquimista",
    price: "$21",
    image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
  },
];

export default function Home() {
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
              <p>{book.price}</p>
              <button
                className="btn-see-more"
                onClick={() => alert(`Pronto podrás ver más sobre: ${book.title}`)}
              >
                Ver más
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

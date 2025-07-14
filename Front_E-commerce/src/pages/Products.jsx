import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/Product.scss";

const Products = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("http://localhost:4000/products");
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || "Error al cargar los libros");
        setBooks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p>Cargando libros...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="products-page">
      <h2>Catálogo de Libros</h2>
      <div className="product-list">
        {books.map((book) => (
          <ProductCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Products;

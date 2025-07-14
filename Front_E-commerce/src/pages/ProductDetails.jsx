import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/ProductDetail.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`http://localhost:4000/products/${id}`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || "No se encontró el libro");
        setBook(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBook();
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (!book) return <p>Cargando libro...</p>;

  return (
    <div className="product-detail">
      <img src={book.image || "/placeholder.jpg"} alt={book.title} />
      <h2>{book.title}</h2>
      <h4>{book.author}</h4>
      <p>{book.description}</p>
      <p>Precio: {book.price} €</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default ProductDetail;

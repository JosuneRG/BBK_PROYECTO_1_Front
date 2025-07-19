import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.scss";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Redirige si no hay usuario
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Obtener pedidos reales (cuando esté el backend)
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`/api/orders/user/${user.id}`); // <- Ajusta esta URL a tu backend
        setOrders(res.data);
      } catch (err) {
        console.error("Error al obtener pedidos:", err);
        setError("No se pudieron cargar los pedidos.");
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchOrders();
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="profile-container">
      <h1>Mi Perfil</h1>
      <div className="user-info">
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      <button onClick={handleLogout} className="logout-btn">Cerrar sesión</button>

      <h2>Mis Pedidos</h2>
      {loading ? (
        <p>Cargando pedidos...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : orders.length === 0 ? (
        <p>Aún no has realizado pedidos.</p>
      ) : (
        <ul className="orders-list">
          {orders.map(order => (
            <li key={order.id}>
              <p><strong>Pedido:</strong> #{order.id}</p>
              <p><strong>Fecha:</strong> {order.date}</p>
              <p><strong>Total:</strong> ${order.total}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Profile;

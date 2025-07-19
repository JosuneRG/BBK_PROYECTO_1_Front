import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Profile.scss";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userId = user.id || user._id;
        if (!userId) {
          setError("ID de usuario no disponible");
          setLoading(false);
          return;
        }

        const res = await axios.get(`http://localhost:4000/api/orders/${userId}`);
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
      <div className="profile-header">
        <h1>👤 Mi Perfil</h1>
        <button onClick={handleLogout} className="logout-btn">Cerrar sesión</button>
      </div>

      <div className="user-info">
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      <div className="orders-section">
        <h2>🛍️ Mis Pedidos</h2>
        {loading ? (
          <p className="loading">Cargando pedidos...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : orders.length === 0 ? (
          <p className="no-orders">Aún no has realizado pedidos.</p>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div className="order-card" key={order.id}>
                <div className="order-header">
                  <span><strong>Pedido #{order.id}</strong></span>
                  <span>{new Date(order.createdAt).toLocaleString()}</span>
                </div>
                <div className="order-items">
                  {order.items.map((item, i) => (
                    <div key={i} className="order-item">
                      {item.image && (
                        <img src={item.image} alt={item.name || item.title} className="item-image" />
                      )}
                      <div className="item-details">
                        <span className="item-name">{item.name || item.title}</span>
                        <span className="item-price">{item.price} €</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="order-total">
                  <strong>Total:</strong> {order.total} €
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

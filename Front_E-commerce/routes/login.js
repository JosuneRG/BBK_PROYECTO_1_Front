// routes/login.js
import express from "express";
const router = express.Router();

const users = [
  { id: 1, email: "test@test.com", password: "8JN]z_w5$3X=", name: "Usuario de Prueba" },
];

router.get("/:userId", (req, res) => {
  const userOrders = orders.filter(order => String(order.userId) === req.params.userId);
  res.json(userOrders);
});

router.post("/", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Email o contraseña incorrectos" });
  }

  res.json({
    message: "Login exitoso",
    user: { id: user.id, email: user.email, name: user.name },
    token: "ejemplo-token-123",
  });
});

export default router;

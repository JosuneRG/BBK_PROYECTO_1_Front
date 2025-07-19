// Usa imports en lugar de require
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, email: "test@test.com", password: "8JN]z_w5$3X=", name: "Usuario de Prueba" },
];

app.post("/api/login", (req, res) => {
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

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});

// server.js
import express from "express";
import cors from "cors";
import loginRoutes from "./routes/login.js";
import ordersRoutes from "./routes/orders.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rutas login
app.use("/api/login", loginRoutes);

// Rutas order
app.use("/api/orders", ordersRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});

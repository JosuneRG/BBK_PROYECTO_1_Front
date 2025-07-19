import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

// Ruta absoluta al archivo JSON
const ordersFilePath = path.resolve("orders.json");

// Leer pedidos del archivo
const readOrdersFromFile = () => {
  try {
    const data = fs.readFileSync(ordersFilePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("❌ Error leyendo orders.json:", err);
    return [];
  }
};

// Guardar pedidos en archivo
const saveOrdersToFile = (orders) => {
  try {
    fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
  } catch (err) {
    console.error("❌ Error guardando orders.json:", err);
  }
};

// Crear pedido
router.post("/", (req, res) => {
  const { userId, items, total } = req.body;

  if (!userId || !items || items.length === 0) {
    return res.status(400).json({ message: "Datos incompletos" });
  }

  const orders = readOrdersFromFile();

  const newOrder = {
    id: orders.length + 1,
    userId,
    items,
    total,
    createdAt: new Date().toISOString(),
  };

  orders.push(newOrder);
  saveOrdersToFile(orders); // 💾 Guardamos

  res.status(201).json(newOrder);
});

// Obtener pedidos por usuario
router.get("/:userId", (req, res) => {
  const orders = readOrdersFromFile();
  const userOrders = orders.filter(
    (order) => String(order.userId) === req.params.userId
  );
  res.json(userOrders);
});

export default router;

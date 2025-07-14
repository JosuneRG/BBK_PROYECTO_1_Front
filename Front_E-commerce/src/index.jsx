import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./routes/AppRouter"  // Ajusta la ruta si es diferente
import "./styles/index.css"  // Opcional, si tienes estilos globales

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
)

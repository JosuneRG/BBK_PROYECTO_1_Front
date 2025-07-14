import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register" // si aplica
import NotFound from "../pages/NotFound"
import MainLayout from "../layout/MainLayout"

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Otras rutas */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}


export default AppRouter;

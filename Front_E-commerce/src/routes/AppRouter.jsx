<<<<<<< HEAD
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register" // si aplica
import NotFound from "../pages/NotFound"
import MainLayout from "../layout/MainLayout"

export default function AppRouter() {
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
=======
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login.jsx';
// otros imports...

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        {/* otras rutas */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
>>>>>>> login

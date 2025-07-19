import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Layout from "./layout/MainLayout";
import Cart from "./pages/Cart";
import Favoritos from "./pages/Favoritos"; // Asegúrate que esté bien importado

<Route path="favoritos" element={<Favoritos />} />


const App = () => {
  return (
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favoritos" element={<Favoritos />} />
      </Route>
    </Routes>
  );
}

export default App;
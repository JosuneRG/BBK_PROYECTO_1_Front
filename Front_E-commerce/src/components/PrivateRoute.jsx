import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Profile from './Profile';
import Home from './Home';

// Supón que tienes un hook o contexto para saber si el usuario está autenticado
import { useAuth } from './AuthContext';

function AppRouter() {
  const { user } = useAuth();  // user existe si está autenticado

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Rutas protegidas */}
        <Route element={<PrivateRoute isAuthenticated={!!user} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/favritos" element={<Favoritos />} />
          {/* aquí más rutas protegidas */}
        </Route>

        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

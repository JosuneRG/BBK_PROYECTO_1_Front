import React from 'react';
import Home from './pages/Home'; // Asegúrate que la ruta es correcta

export default function App() {
  return (
    <div>
      <Home />
    </div>
  );
}
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <AppRouter />
  );
}

export default App;

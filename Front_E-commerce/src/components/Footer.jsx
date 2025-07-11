import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {
  return (
     <footer className="footer">
      <p>© {new Date().getFullYear()} Mi Página de Noticias. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;

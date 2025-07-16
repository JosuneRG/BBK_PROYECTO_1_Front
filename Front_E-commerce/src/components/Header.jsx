import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="nav">
        <div className="nav-left">
          <Link to="/" className="home-link">📚 Librería BBK</Link>
        </div>
        <div className="nav-right">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/profile">Mi Perfil</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>News App</h1>
      <nav>
        <Link to="/home">Home</Link> | 
        <Link to="/Login">Create news</Link> | 
        <Link to="/Register">View news</Link>
      </nav>
    </header>
  )
}

export default Header

import '../styles/Header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="containerHeader">
      <nav className="navbar">
        <ul className="liste">
          <li>
            <Link className="links" to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link className="links" to="/projects">
              Projets
            </Link>
          </li>
          <li>
            <Link className="links" to="/gallery">
              Galerie
            </Link>
          </li>
          <li>
            <Link className="links" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header

import Link from 'next/link'
import "./navbar.css"
import "bootstrap/dist/css/bootstrap.min.css"
export default function Navbar() {
  return (

    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand logo" href="#">
            Sentinel Security
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link item" href="#">
                  Início
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link item" href="#produtos">
                  Produtos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link item" href="#sobre">
                  Sobre
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link item " href="#contato">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

  );
}

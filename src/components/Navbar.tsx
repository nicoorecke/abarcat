import Link from "next/link"

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link href="/">Abarcat</Link>
        </div>

        <nav className="nav-links">
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/proyectos">Proyectos</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  )
}

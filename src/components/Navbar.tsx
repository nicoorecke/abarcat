import Link from "next/link"

export default function Navbar() {
  
  return (
    
    <header className="navbar">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      <div className="navbar-container">
        <div className="logo">
          <img src="abarcat.svg" alt="" />
          <h1 className="loguillo">ABARCAT</h1>
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

"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      <div className="navbar-container">
        
        {/* LOGO */}
        <Link href="/" className="logo">
          <img src="/abarcat.svg" alt="Logo Abarcat" />
          <h1 className="loguillo">ABARCAT</h1>
        </Link>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* LINKS */}
        <nav className={`nav-links ${open ? "active" : ""}`}>
          <Link href="/nosotros" onClick={() => setOpen(false)}>
            Nosotros
          </Link>

          <Link href="/proyectos" onClick={() => setOpen(false)}>
            Proyectos
          </Link>

          <Link href="/contacto" onClick={() => setOpen(false)}>
            Contacto
          </Link>
        </nav>

      </div>
    </header>
  )
}
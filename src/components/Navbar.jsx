import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header>
      <img src="/src/assets/logo.png" alt="Mixx FM" className="logo" />
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/programmes">Programmes</Link></li>
          <li><Link to="/podcasts">Podcasts</Link></li>
          <li><Link to="/evenements">Événements</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

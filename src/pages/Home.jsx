import React from 'react'

export default function Home(){
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline src="/src/assets/bg.mp4"></video>
      <div className="overlay"></div>
      <div className="inner">
        <h1>Mixx Radio Charleroi</h1>
        <p>La radio électro locale — Toujours au coeur de Charleroi</p>
        <a className="btn" href="#player">Écouter maintenant</a>
      </div>
    </section>
  )
}

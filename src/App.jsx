import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Programmes from './pages/Programmes'
import Podcasts from './pages/Podcasts'
import Evenements from './pages/Evenements'
import Contact from './pages/Contact'
import Player from './components/Player'
import Navbar from './components/Navbar'

export default function App(){
  return (
    <div className="app">
      <Navbar />
      <main>
        <Suspense fallback={<div>Chargement...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/evenements" element={<Evenements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Player />
    </div>
  )
}

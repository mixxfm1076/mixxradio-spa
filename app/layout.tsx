import './globals.css'
import Player from '../components/Player'

export const metadata = {
  title: 'Mixx Radio Charleroi – La Radio Électro Culturelle',
  description: 'Mixx Radio Charleroi – flux en direct, podcasts, événements et DJ Night.'
}

export default function RootLayout({ children }){
  return (
    <html lang="fr">
      <body>
        <header className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur z-30">
          <div className="max-w-6xl mx-auto flex items-center gap-6 p-4">
            <img src="/assets/logo.png" alt="Mixx FM" className="h-12" />
            <nav className="flex gap-4 ml-4">
              <a href="/" className="text-sm">Accueil</a>
              <a href="/programmes" className="text-sm">Programmes</a>
              <a href="/podcasts" className="text-sm">Podcasts</a>
              <a href="/evenements" className="text-sm">Événements</a>
              <a href="/contact" className="text-sm">Contact</a>
              <a href="/live" className="text-sm">Live</a>
            </nav>
          </div>
        </header>

        <main className="pt-24">
          {children}
        </main>

        <footer className="mt-10">
          <div className="max-w-6xl mx-auto p-6 text-center text-sm text-gray-400">
            🎶 Mixx FM Charleroi — Développé par 8 Compagny Event • <a href="https://mixxradio.be" className="text-mixx-pink">mixxradio.be</a> • <a href="https://www.facebook.com/mixxfmradio" className="text-mixx-pink">Facebook</a>
          </div>
        </footer>

        <Player />
      </body>
    </html>
  )
}

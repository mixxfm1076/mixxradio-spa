'use client'
import PlayerLarge from '../../components/PlayerLarge'
import VUMeter from '../../components/VUMeter'
import { motion } from 'framer-motion'

export default function Live(){
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <video src="/assets/bg_stylized.mp4" autoPlay muted loop className="absolute inset-0 w-full h-full object-cover filter blur-2xl brightness-50 scale-105" />
      <div className="relative z-10 max-w-4xl p-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-extrabold text-mixx-pink mb-4">Mixx Live — Charleroi</h1>
          <p className="text-gray-300 mb-6">En direct maintenant — DJ sets & événements</p>
          <div className="bg-black/40 p-6 rounded-xl">
            <PlayerLarge />
            <div className="mt-6"><VUMeter /></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

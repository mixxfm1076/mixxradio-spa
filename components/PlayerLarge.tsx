'use client'
import { useEffect, useRef, useState } from 'react'

export default function PlayerLarge(){
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [title, setTitle] = useState('Mixx FM Live')
  const [artist, setArtist] = useState('Charleroi - Electro')
  const stream = process.env.NEXT_PUBLIC_STREAM_URL || 'https://mixxfm.ice.infomaniak.ch/mixxfm-96.mp3'

  useEffect(()=>{
    if(!audioRef.current){
      audioRef.current = new Audio(stream)
      audioRef.current.preload = 'none'
    }
    const fetchMeta = async ()=>{
      try{
        const res = await fetch('/api/nowplaying')
        const j = await res.json()
        setTitle(j.title || 'Mixx FM Live')
        setArtist(j.artist || 'Charleroi - Electro')
      }catch(e){}
    }
    fetchMeta()
    const id = setInterval(fetchMeta,10000)
    return ()=> clearInterval(id)
  },[stream])

  const toggle = ()=>{
    if(!audioRef.current) return
    if(playing){ audioRef.current.pause(); setPlaying(false) }
    else { audioRef.current.play().catch(()=>{}); setPlaying(true) }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <img src="/assets/logo.png" className="h-28 rounded-lg shadow-lg" alt="Mixx"/>
      <div className="text-2xl font-bold text-mixx-pink">{title}</div>
      <div className="text-gray-300">{artist}</div>
      <div className="mt-3 flex items-center gap-3">
        <button onClick={toggle} className="px-4 py-2 rounded bg-mixx-pink text-white">{playing ? '⏸ PAUSE' : '▶ ÉCOUTER'}</button>
        <a className="px-4 py-2 rounded bg-gradient-to-r from-[#ff48a5] to-[#a94aa6] text-white" href="https://mixxradio.be" target="_blank">Site</a>
      </div>
    </div>
  )
}

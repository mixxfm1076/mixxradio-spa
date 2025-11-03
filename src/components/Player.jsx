import React, { useEffect, useRef, useState } from 'react'

const STREAM = 'https://mixxfm.ice.infomaniak.ch/mixxfm-192.mp3'

export default function Player(){
  const audioRef = useRef(new Audio(STREAM))
  const [playing, setPlaying] = useState(false)
  const [title, setTitle] = useState('Mixx FM Live')
  const [artist, setArtist] = useState('Charleroi - Electro')
  const barsRef = useRef([])

  useEffect(()=>{
    const audio = audioRef.current
    audio.crossOrigin = 'anonymous'
    audio.preload = 'none'

    // simple metadata fetch loop (user should proxy credentials server-side in production)
    async function fetchMeta(){
      try{
        const res = await fetch('https://mixxfm:tjoDHeDI@api.infomaniak.com/radios/1/nowplaying')
        const j = await res.json()
        setTitle(j.title || 'Mixx FM Live')
        setArtist(j.artist || 'Mixx FM Charleroi')
      }catch(e){
        // ignore - fallback used
      }
    }
    fetchMeta()
    const iv = setInterval(fetchMeta, 10000)
    return ()=> clearInterval(iv)
  },[])

  useEffect(()=>{
    let rafId
    function animate(){
      barsRef.current.forEach((b,i)=>{
        if(b) b.style.height = (6 + Math.random()*36*(i/3+0.4)) + 'px'
      })
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)
    return ()=> cancelAnimationFrame(rafId)
  },[])

  function toggle(){
    const audio = audioRef.current
    if(!playing){
      audio.play().catch(()=>{})
      setPlaying(true)
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  return (
    <div className="player-fixed" role="region" aria-label="Lecteur Mixx FM">
      <img src="/src/assets/logo.png" alt="logo" />
      <div className="meta">
        <div className="title" title={title}>{title}</div>
        <div className="artist">{artist}</div>
      </div>
      <div className="controls">
        <div id="playbtn" className="btn-icon" onClick={toggle}>{playing ? '⏸' : '▶'}</div>
        <div className="led-bars" aria-hidden="true">
          <div className="bar" ref={el=>barsRef.current[0]=el}></div>
          <div className="bar" ref={el=>barsRef.current[1]=el}></div>
          <div className="bar" ref={el=>barsRef.current[2]=el}></div>
          <div className="bar" ref={el=>barsRef.current[3]=el}></div>
        </div>
      </div>
    </div>
  )
}

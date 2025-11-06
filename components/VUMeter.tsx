'use client'
import { useEffect, useState } from 'react'

export default function VUMeter(){
  const [levels, setLevels] = useState(new Array(12).fill(2))

  useEffect(()=>{
    let raf = null
    function anim(){
      setLevels(prev => prev.map(() => Math.max(2, Math.floor(Math.random()*28))))
      raf = requestAnimationFrame(()=> setTimeout(anim, 120))
    }
    anim()
    return ()=> cancelAnimationFrame(raf)
  },[])

  return (
    <div className="flex gap-2 items-end justify-center">
      {levels.map((h,i)=> (
        <div key={i} style={{height: `${h}px`}} className="w-2 bg-gradient-to-b from-[#ff48a5] to-[#2cd85b] rounded-sm"></div>
      ))}
    </div>
  )
}

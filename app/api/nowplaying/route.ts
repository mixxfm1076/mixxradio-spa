import { NextResponse } from 'next/server'

export async function GET(){
  try{
    const token = process.env.INFOMANIAK_TOKEN
    const radioId = process.env.RADIO_ID || '7391'
    if(!token) return NextResponse.json({ error: 'INFOMANIAK_TOKEN not set' }, { status: 500 })

    const res = await fetch(`https://api.infomaniak.com/1/radios/${radioId}/stats`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    if(!res.ok) return NextResponse.json({ error: 'failed to fetch' }, { status: res.status })
    const j = await res.json()

    const title = j.now_playing?.song?.title || j.song_title || j.meta?.song || null
    const artist = j.now_playing?.song?.artist || j.song_artist || j.meta?.artist || null

    return NextResponse.json({ title, artist })
  }catch(e){
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

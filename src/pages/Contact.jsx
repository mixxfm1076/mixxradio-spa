import React, { useState } from 'react'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    const entry = { name, email, message, date: new Date().toISOString() }
    const list = JSON.parse(localStorage.getItem('mixx_contact')||'[]')
    list.push(entry)
    localStorage.setItem('mixx_contact', JSON.stringify(list))
    setSent(true)
    setName(''); setEmail(''); setMessage('')
  }

  return (
    <section className="section">
      <h2>Contact</h2>
      <div className="grid">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <label>Votre nom<br/><input value={name} onChange={e=>setName(e.target.value)} required/></label><br/><br/>
            <label>Votre email<br/><input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></label><br/><br/>
            <label>Message<br/><textarea value={message} onChange={e=>setMessage(e.target.value)} rows="6" required/></label><br/><br/>
            <button className="btn" type="submit">Envoyer</button>
          </form>
          {sent && <p>Merci — votre message a été sauvegardé localement.</p>}
        </div>
        <div className="card">
          <h3>Contacts utiles</h3>
          <p>DJ Night: coralielefebvre9@gmail.com</p>
          <p>Régie Publicitaire: coralie@8compagnyevent.com</p>
          <p>Président: yves.castel@gmail.com</p>
          <p>Webmaster: daveve@8compagnyevent.com</p>
        </div>
      </div>
    </section>
  )
}

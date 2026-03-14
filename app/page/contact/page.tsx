"use client"
import { useState } from "react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name || !email) {
      setMessage("Todos los campos son obligatorios")
      return
    }

    setMessage(`Formulario enviado por ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Formulario</h1>

      <input
        id="name"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Enviar</button>

      {message && <p id="message">{message}</p>}
    </form>
  )
}
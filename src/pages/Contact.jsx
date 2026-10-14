import emailjs from '@emailjs/browser'
import { CheckCircle2, Mail, Send, ShieldCheck } from 'lucide-react'
import { useState } from 'react'

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const configured = Boolean(
    EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID
  )

  async function handleSubmit(event) {
    event.preventDefault()
    if (!configured) {
      setStatus('error')
      setMessage(
        'El formulario todavía no está configurado. Completa las variables de EmailJS indicadas en el README.'
      )
      return
    }

    const form = event.currentTarget
    if (form.website.value) return

    setStatus('sending')
    setMessage('')

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY
      })
      setStatus('success')
      setMessage(
        'Tu mensaje ha sido enviado correctamente. Gracias por ponerte en contacto.'
      )
      form.reset()
    } catch (error) {
      console.error(error)
      setStatus('error')
      setMessage(
        'No hemos podido enviar el mensaje. Inténtalo de nuevo en unos minutos.'
      )
    }
  }

  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container">
          <span className="eyebrow light">Contacto</span>
          <h1>¿Quieres compartir algo sobre esta historia?</h1>
          <p>
            Si tienes información, fotografías, documentos, testimonios o
            cualquier material relacionado con Luis, puedes escribir a la
            familia.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-layout">
          <aside className="contact-aside">
            <span className="eyebrow">Un archivo abierto</span>
            <h2>
              La memoria también se construye entre familias, investigadores y
              testigos
            </h2>
            <p>
              Si dispones de información que pueda ayudar a reconstruir la
              trayectoria del brigadista, este es el lugar perfecto para
              compartirla.
            </p>
            <div className="bio-facts">
              <div>
                <Mail size={20} />
                <span>
                  <strong>Contacto familiar</strong> El mensaje llegará al
                  correo configurado por la familia.
                </span>
              </div>
            </div>
            <div className="bio-facts">
              <div>
                <ShieldCheck size={20} />
                <span>
                  <strong>Uso responsable</strong> La información recibida se
                  revisará antes de incorporarla al archivo público.
                </span>
              </div>
            </div>
          </aside>

          <div className="contact-form-wrap">
            <div className="contact-form-heading">
              <span className="eyebrow">Escríbenos</span>
              <h2>Enviar un mensaje</h2>
              <p>
                Cuéntanos brevemente quién eres y qué información quieres
                compartir.
              </p>
            </div>

            <form
              className="contact-form"
              id="contact-form"
              onSubmit={handleSubmit}
            >
              <input
                className="honeypot"
                type="text"
                name="website"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="form-row">
                <label>
                  <span>Nombre</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    required
                  />
                </label>
                <label>
                  <span>Correo electrónico</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                  />
                </label>
              </div>
              <label>
                <span>Asunto</span>
                <input
                  name="title"
                  type="text"
                  placeholder="¿Sobre qué quieres escribirnos?"
                  required
                />
              </label>
              <label>
                <span>Mensaje</span>
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Escribe aquí tu mensaje..."
                  required
                />
              </label>
              <input type="hidden" name="source" value="Web · El Brigadista" />
              <button
                className="button button-dark contact-submit"
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  'Enviando...'
                ) : (
                  <>
                    Enviar mensaje <Send size={15} />
                  </>
                )}
              </button>
            </form>

            {status === 'success' && (
              <div className="form-feedback success">
                <CheckCircle2 size={18} />
                {message}
              </div>
            )}
            {status === 'error' && (
              <div className="form-feedback error">{message}</div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

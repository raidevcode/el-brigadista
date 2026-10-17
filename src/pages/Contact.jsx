import emailjs from '@emailjs/browser'
import { CheckCircle2, Mail, Send, ShieldCheck } from 'lucide-react'
import { useState } from 'react'

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  title: 120,
  message: 5000
}

function validateForm(data) {
  const errors = {}

  const name = data.name.trim()
  const email = data.email.trim()
  const title = data.title.trim()
  const message = data.message.trim()

  if (name.length < 2) {
    errors.name = 'Escribe tu nombre (al menos 2 caracteres).'
  } else if (name.length > MAX_LENGTHS.name) {
    errors.name = 'El nombre no puede superar los 100 caracteres.'
  }

  // Comprobación práctica del formato de correo.
  if (!email) {
    errors.email = 'El correo electrónico es obligatorio.'
  } else if (
    email.length > MAX_LENGTHS.email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    errors.email = 'Introduce una dirección de correo válida.'
  }

  if (title.length < 3) {
    errors.title = 'El asunto debe tener al menos 3 caracteres.'
  } else if (title.length > MAX_LENGTHS.title) {
    errors.title = 'El asunto no puede superar los 120 caracteres.'
  }

  if (message.length < 20) {
    errors.message = 'El mensaje debe tener al menos 20 caracteres.'
  } else if (message.length > MAX_LENGTHS.message) {
    errors.message = 'El mensaje no puede superar los 5000 caracteres.'
  }

  return errors
}

function getFormData(form) {
  const getValue = name =>
    String(form.elements.namedItem(name)?.value ?? '').trim()

  return {
    name: getValue('name'),
    email: getValue('email'),
    title: getValue('title'),
    message: getValue('message'),
    source: 'Web · El Brigadista'
  }
}

function validateField(fieldName, data) {
  const errors = validateForm(data)
  return errors[fieldName] || ''
}

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')
  const [errors, setErrors] = useState({})

  const configured = Boolean(
    EMAILJS_PUBLIC_KEY &&
      EMAILJS_SERVICE_ID &&
      EMAILJS_TEMPLATE_ID &&
      EMAILJS_PUBLIC_KEY !== 'your_public_key' &&
      EMAILJS_SERVICE_ID !== 'your_service_id' &&
      EMAILJS_TEMPLATE_ID !== 'your_template_id'
  )

  // function clearFieldError(field) {
  //   setErrors(current => ({
  //     ...current,
  //     [field]: ''
  //   }))

  //   if (status === 'error') {
  //     setStatus('idle')
  //     setFeedback('')
  //   }
  // }

  function handleFieldValidation(event) {
    const field = event.currentTarget
    const fieldName = field.name

    if (!fieldName || fieldName === 'website') return

    const form = field.form
    if (!form) return

    const data = getFormData(form)
    const error = validateField(fieldName, data)

    setErrors(current => ({
      ...current,
      [fieldName]: error
    }))

    setFeedback('')
    setStatus(current => (current === 'error' ? 'idle' : current))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget

    // if (status === 'sending') return

    const formData = new FormData(form)

    // Conserva aquí tu comprobación del honeypot.
    // if (String(formData.get('website') || '').trim()) {
    //   form.reset()
    //   return
    // }

    // Leer siempre los valores actuales del formulario.
    const data = getFormData(form)

    const validationErrors = validateForm(data)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setStatus('error')
      setFeedback('Revisa los campos señalados antes de enviar el mensaje.')
      return
    }

    if (!configured) {
      setStatus('error')
      setFeedback(
        'El servicio de correo todavía no está configurado. Revisa las variables de EmailJS en el archivo .env.'
      )
      return
    }

    setStatus('sending')
    setFeedback('')

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data, {
        publicKey: EMAILJS_PUBLIC_KEY
      })

      setStatus('success')
      setFeedback(
        'Tu mensaje se ha enviado correctamente. Gracias por contribuir a preservar esta historia.'
      )
      setErrors({})
      form.reset()
    } catch (error) {
      // Este detalle permite diagnosticar el fallo desde la consola.
      console.error('Error al enviar el formulario con EmailJS:', {
        status: error?.status,
        text: error?.text,
        error
      })

      setStatus('error')
      setFeedback(
        'No hemos podido enviar el mensaje. Comprueba la configuración del servicio e inténtalo de nuevo.'
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
            Cada fotografía, documento o testimonio puede ayudar a descubrir
            nuevas piezas de una historia que merece ser preservada. Si tienes
            información sobre Luis M. Peraza Barrios, las Brigadas
            Internacionales o su contexto histórico, nos gustaría conocerla.
            También puedes escribirnos para compartir recuerdos familiares,
            aportar referencias documentales o plantear preguntas sobre esta
            investigación.
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
                  correo configurado para recibir las comunicaciones del
                  proyecto.
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
              noValidate
            >
              {/* Campo trampa antispam: debe permanecer oculto mediante CSS. */}
              <div className="honeypot" aria-hidden="true">
                <label htmlFor="website">No rellenes este campo</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              <div className="form-row">
                <label>
                  <span>Nombre</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    autoComplete="name"
                    minLength={2}
                    maxLength={MAX_LENGTHS.name}
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    onInput={handleFieldValidation}
                    onBlur={handleFieldValidation}
                  />
                  {errors.name && (
                    <small id="name-error" className="field-error">
                      {errors.name}
                    </small>
                  )}
                </label>

                <label>
                  <span>Correo electrónico</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    autoComplete="email"
                    maxLength={MAX_LENGTHS.email}
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    onInput={handleFieldValidation}
                    onBlur={handleFieldValidation}
                  />
                  {errors.email && (
                    <small id="email-error" className="field-error">
                      {errors.email}
                    </small>
                  )}
                </label>
              </div>

              <label>
                <span>Asunto</span>
                <input
                  name="title"
                  type="text"
                  placeholder="¿Sobre qué quieres escribirnos?"
                  minLength={3}
                  maxLength={MAX_LENGTHS.title}
                  required
                  aria-invalid={Boolean(errors.title)}
                  aria-describedby={errors.title ? 'title-error' : undefined}
                  onInput={handleFieldValidation}
                  onBlur={handleFieldValidation}
                />
                {errors.title && (
                  <small id="title-error" className="field-error">
                    {errors.title}
                  </small>
                )}
              </label>

              <label>
                <span>Mensaje</span>
                <textarea
                  name="message"
                  rows={7}
                  placeholder="Escribe aquí tu mensaje..."
                  minLength={20}
                  maxLength={MAX_LENGTHS.message}
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? 'message-error' : undefined
                  }
                  onInput={handleFieldValidation}
                  onBlur={handleFieldValidation}
                />
                {errors.message && (
                  <small id="message-error" className="field-error">
                    {errors.message}
                  </small>
                )}
              </label>

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
              <div
                className="form-feedback success"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2 size={18} />
                {feedback}
              </div>
            )}

            {status === 'error' && (
              <div
                className="form-feedback error"
                role="alert"
                aria-live="assertive"
              >
                {feedback}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

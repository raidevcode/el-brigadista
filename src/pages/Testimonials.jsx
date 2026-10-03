import { BookOpen, Quote, Users } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { familyTestimonials, warTestimonials } from '../data/testimonialsData'

export default function Testimonials() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">Voces · memoria · testimonios</span>
          <h1>Las personas también cuentan la historia.</h1>
          <p>
            Un archivo de voces para reunir testimonios históricos y recuerdos
            familiares relacionados con Luis M. Peraza Barrios.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Memoria de guerra"
            title="Testimonios sobre el brigadista"
            text="Aquí se incorporarán testimonios documentados, cartas, recuerdos o referencias de compañeros y fuentes históricas. Los textos actuales son ficticios y sirven únicamente como estructura visual."
          />
          <div className="testimonials-war-grid">
            {warTestimonials.map((item, index) => (
              <article className="war-testimonial" key={index}>
                <div className="testimonial-top">
                  <Quote size={24} />
                  <span>{item.label}</span>
                </div>
                <blockquote>“{item.quote}”</blockquote>
                <div className="testimonial-source">
                  <strong>{item.source}</strong>
                  <span>{item.context}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <SectionHeading
            eyebrow="Memoria familiar"
            title="Así lo recuerdan sus familiares"
            text="Una colección de voces íntimas para conservar cómo fue Luis en casa, más allá de los documentos históricos."
          />
          <div className="family-testimonials-grid">
            {familyTestimonials.map(item => (
              <article
                className="family-testimonial"
                key={`${item.relation}-${item.name}`}
              >
                <div className="family-avatar">
                  <Users size={20} />
                </div>
                <span className="card-tag">{item.relation}</span>
                <h3>{item.name}</h3>
                <p>“{item.quote}”</p>
              </article>
            ))}
          </div>
          <div className="testimonial-note">
            <BookOpen size={20} />
            <p>
              <strong>Nota editorial:</strong> los testimonios de esta versión
              son textos ficticios de demostración. Sustitúyelos únicamente por
              testimonios reales y conserva siempre su procedencia, autoría y
              contexto.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

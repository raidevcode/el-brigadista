import { ArrowRight, Clock3, FileText, Megaphone, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { research } from '../data/siteData'

export default function Research() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">Investigación y difusión</span>
          <h1>La memoria como proyecto vivo</h1>
          <p>
            Esta sección documenta la actividad de investigación y difusión del
            descendiente: qué se investiga, qué fuentes se consultan y qué
            contenidos se publican.
          </p>
        </div>
      </section>
      <section className="section container">
        <div className="method-grid">
          {[
            [
              Search,
              'Investigar',
              'Consultar archivos, bibliografía y fuentes primarias.'
            ],
            [
              FileText,
              'Documentar',
              'Describir y conservar los documentos encontrados.'
            ],
            [
              Megaphone,
              'Difundir',
              'Convertir los resultados en contenidos accesibles.'
            ],
            [
              Clock3,
              'Mantener',
              'Registrar nuevas investigaciones, hallazgos y actualizaciones.'
            ]
          ].map(([Icon, title, text], index) => (
            <article className="method-card" key={title}>
              <Icon />
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-paper">
        <div className="container">
          <SectionHeading
            eyebrow="Cuaderno de investigación"
            title="Publicaciones del proyecto"
            text="En la versión final, cada entrada tendrá fecha, autor, fuentes y documentos relacionados."
          />
          <div className="research-list">
            {research.map((entry, index) => (
              <article className="research-list-item" key={entry.title}>
                <div className="research-number">0{index + 1}</div>
                <div>
                  <small>
                    {entry.date} · {entry.category}
                  </small>
                  <h3>{entry.title}</h3>
                  <p>{entry.excerpt}</p>
                  <Link to={`/investigacion/${index + 1}`}>
                    Abrir investigación <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container callout-wide">
        <span className="eyebrow">Importante</span>
        <h2>No vamos a inventar continuidad.</h2>
        <p>
          La web debe registrar la actividad que realmente se realice. Si el
          proyecto comienza ahora, las fechas y publicaciones comenzarán ahora.
          La continuidad se construye con investigación real, publicaciones
          reales y actualizaciones trazables.
        </p>
      </section>
    </>
  )
}

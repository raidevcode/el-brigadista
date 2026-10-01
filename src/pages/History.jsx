import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import { timeline } from '../data/siteData'

export default function History() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">Su historia</span>
          <h1>De Cuba a España, del Ebro al exilio</h1>
          {/* <p>
            Una cronología construida a partir de la documentación disponible.
            El objetivo es mostrar qué sabemos, de dónde procede y qué queda por
            investigar.
          </p> */}
        </div>
      </section>
      <section className="section container narrow">
        <SectionHeading eyebrow="Línea temporal" title="Los acontecimientos" />
        <Timeline items={timeline} />
      </section>
      {/* <section className="section section-paper">
        <div className="container split-intro">
          <div>
            <span className="eyebrow">Contexto</span>
            <h2>La historia individual dentro de una historia colectiva.</h2>
          </div>
          <div>
            <p>
              La biografía de un brigadista no puede entenderse sin explicar el
              contexto de las Brigadas Internacionales, la Guerra Civil
              Española, la retirada y el exilio.
            </p>
            <p>
              Esta sección crecerá con artículos de contexto y referencias
              bibliográficas, evitando presentar interpretaciones como hechos
              documentales.
            </p>
          </div>
        </div>
      </section> */}
    </>
  )
}

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
          <p>
            Una cronología construida a partir de la documentación disponible.
          </p>
        </div>
      </section>
      <section className="section container narrow">
        <SectionHeading eyebrow="Línea temporal" title="Los acontecimientos." />
        <p>
          La trayectoria de Luis M. Peraza Barrios puede reconstruirse a través
          de una serie de fechas, lugares y registros que conectan Cuba, los
          frentes de la Guerra Civil española y los campos de internamiento de
          Francia.
        </p>
        <p>
          Esta línea temporal reúne los principales hitos que aparecen en la
          documentación histórica consultada. Cada acontecimiento permite
          acercarnos a su recorrido individual y, al mismo tiempo, comprender el
          contexto de una generación marcada por la guerra, la retirada y el
          desplazamiento forzoso.
        </p>
        <p>
          Las fechas y los lugares aquí recogidos constituyen una base
          documental para la investigación. Cuando las fuentes no permiten
          precisar las circunstancias personales de un acontecimiento, esa
          limitación se señala en lugar de completar el relato mediante
          suposiciones.
        </p>
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

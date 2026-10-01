import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">Sobre el proyecto</span>
          <h1>Investigar, documentar, difundir y preservar.</h1>
          <p>
            Este sitio nace como iniciativa de un descendiente que quiere
            reconstruir la historia de su ascendiente y poner los resultados de
            esa investigación a disposición del público.
          </p>
        </div>
      </section>
      <section className="section container">
        <div className="split-intro">
          <div>
            <span className="eyebrow">Propósito</span>
            <h2>Un archivo digital, no solo un homenaje.</h2>
          </div>
          <div className="prose">
            <p>
              El proyecto busca reunir documentos familiares, fuentes
              históricas, bibliografía y nuevas investigaciones en un espacio
              público, organizado y trazable.
            </p>
            <p>
              La web debe evolucionar junto con la investigación. Cada nueva
              publicación, documento o hallazgo debe quedar identificado por
              fecha y fuente.
            </p>
          </div>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container">
          <SectionHeading
            eyebrow="Principios editoriales"
            title="Cómo se construye el archivo"
          />
          <div className="principles-grid">
            {[
              'Distinguir hechos documentados de testimonios familiares.',
              'Citar las fuentes utilizadas para cada afirmación histórica.',
              'Indicar cuándo una investigación está en desarrollo.',
              'No alterar ni presentar como originales las reproducciones documentales.',
              'Actualizar el archivo cuando aparezcan nuevos documentos.',
              'Mantener una perspectiva histórica y no partidista.'
            ].map(item => (
              <div className="principle-row" key={item}>
                <CheckCircle2 size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section container callout-wide">
        <span className="eyebrow">Siguiente paso</span>
        <h2>Convertir esta plantilla en el archivo de Luis.</h2>
        <p>
          Cuando tengas reunidos los documentos y la información familiar,
          sustituiremos los contenidos de ejemplo por datos contrastados,
          fotografías, documentos y publicaciones reales.
        </p>
        <Link className="button button-dark" to="/documentos">
          Ir al archivo <ArrowRight size={17} />
        </Link>
      </section>
    </>
  )
}

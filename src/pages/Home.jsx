import {
  ArrowRight,
  BookOpen,
  FileSearch,
  Landmark,
  ScrollText
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { site, timeline } from '../data/siteData'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image placeholder-photo">
          <div className="photo-grid" aria-hidden="true">
            <img src="/images/img1.jpg" alt="" />
          </div>
          <div className="hero-overlay" />
          <div className="hero-caption">
            Archivo histórico · Cuba · España · Francia
          </div>
        </div>
        <div className="hero-copy">
          <span className="eyebrow light">{site.heroKicker}</span>
          <h1>{site.heroTitle}</h1>
          <p className="hero-lead">{site.heroText}</p>
          <div className="hero-actions">
            <Link className="button button-light" to="/historia">
              Conocer su historia <ArrowRight size={17} />
            </Link>
            {/* <Link className="button button-ghost-light" to="/investigacion">
              Ver la investigación
            </Link> */}
          </div>
          <div className="hero-name">
            <strong>{site.personName}</strong>
            {/* <span>{site.dates}</span> */}
            <span>1913 — 2002</span>
          </div>
        </div>
      </section>

      <section className="principles-strip">
        {[
          [
            FileSearch,
            'Investigar',
            'Reconstruir una historia a partir de fuentes.'
          ],
          [ScrollText, 'Documentar', 'Conservar y organizar las evidencias.'],
          [BookOpen, 'Difundir', 'Compartir el conocimiento públicamente.'],
          [Landmark, 'Preservar', 'Mantener viva la memoria democrática.']
        ].map(([Icon, title, text]) => (
          <div className="principle" key={title}>
            <Icon size={22} />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>

      <section className="quote-band">
        <blockquote>
          “Investigar el pasado no consiste únicamente en recordarlo: también
          significa conservar sus documentos, comprender su contexto y
          transmitirlo a quienes vienen después.”
        </blockquote>
      </section>

      <section className="section container intro-section">
        <div className="split-intro">
          <div>
            <span className="eyebrow">El proyecto</span>
            <h2>Una historia familiar convertida en investigación pública.</h2>
          </div>
          <div>
            <p>
              Este sitio está concebido como un archivo digital abierto: reúne
              la biografía, la documentación disponible, las fuentes consultadas
              y el proceso de investigación de los familiares del brigadista.
            </p>
            <Link className="inline-link" to="/proyecto">
              Conocer el propósito del proyecto <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <SectionHeading
            eyebrow="Cronología"
            title="Una vida marcada por la historia"
            // text="Una primera reconstrucción temporal. Cada acontecimiento debe poder relacionarse con una fuente o documento."
          />
          <div className="timeline-preview">
            {timeline.slice(0, 5).map((item, index) => (
              <div className="mini-event" key={index}>
                <span>{item.year}</span>
                <strong>{item.title}</strong>
              </div>
            ))}
          </div>
          <Link className="button button-dark" to="/historia">
            Ver cronología completa <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* <section className="section container">
        <SectionHeading
          eyebrow="Archivo"
          title="Documentos y fuentes"
          text="La historia también se demuestra. El archivo organiza las piezas utilizadas para reconstruirla."
        />
        <div className="card-grid">
          {documents.slice(0, 3).map(doc => (
            <DocumentPreview key={doc.title} document={doc} />
          ))}
        </div>
        <Link className="button button-outline" to="/documentos">
          Explorar el archivo <ArrowRight size={17} />
        </Link>
      </section> */}

      {/* <section className="section dark-section">
        <div className="container">
          <SectionHeading
            eyebrow="Investigación y difusión"
            title="Mantener viva la memoria"
            text="La investigación se convierte en contenido público: artículos, contexto histórico, documentos comentados y un diario del proceso."
          />
          <div className="research-grid">
            {research.map((entry, index) => (
              <article className="research-card" key={entry.title}>
                <span>0{index + 1}</span>
                <small>
                  {entry.category} · {entry.date}
                </small>
                <h3>{entry.title}</h3>
                <p>{entry.excerpt}</p>
                <Link to={`/investigacion/${index + 1}`}>
                  Leer investigación <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
          <Link className="button button-light" to="/investigacion">
            Ver todo el proyecto de investigación <ArrowRight size={17} />
          </Link>
        </div>
      </section> */}
    </>
  )
}

function DocumentPreview({ document }) {
  return (
    <article className="document-card compact">
      <div className="document-preview">
        <FileSearch size={30} />
      </div>
      <div className="card-content">
        <span className="card-tag">{document.tag}</span>
        <h3>{document.title}</h3>
        <p>{document.description}</p>
      </div>
    </article>
  )
}

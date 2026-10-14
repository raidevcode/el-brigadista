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
            {/* <Link className="button button-light" to="/historia">
              Conocer su Historia <ArrowRight size={17} />
            </Link> */}
            <Link className="button button-light" to="/biografia">
              Conocer su biografía <ArrowRight size={17} />
            </Link>
            <Link className="button button-light" to="/proyecto">
              Conocer sobre el proyecto
              <ArrowRight size={17} />
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
            'Reconstruir una historia a partir de fuentes'
          ],
          [ScrollText, 'Documentar', 'Conservar y organizar las evidencias'],
          [BookOpen, 'Difundir', 'Compartir el conocimiento públicamente'],
          [Landmark, 'Preservar', 'Mantener viva la memoria democrática']
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
            <h2>Una historia familiar convertida en investigación pública</h2>
          </div>
          <div>
            <p>
              La historia de una familia también puede ser una puerta de entrada
              a la memoria colectiva. Este proyecto nace del deseo de recuperar,
              documentar y difundir la trayectoria de{' '}
              <strong>Luis M. Peraza Barrios</strong>, un voluntario cubano que
              llegó a España en febrero de 1938 para incorporarse a las Brigadas
              Internacionales durante la Guerra Civil española.
            </p>
            <p>
              A partir de los registros históricos disponibles, la documentación
              conservada y la investigación de fuentes bibliográficas y
              archivísticas, queremos reconstruir su recorrido y situarlo en el
              contexto de los acontecimientos que marcaron su vida: la guerra,
              la retirada republicana, el internamiento en Francia y su regreso
              a Cuba en 1939.
            </p>
            <p>
              <strong>Memoria y Democracia Luis M. Peraza Barrios</strong> es un
              espacio de investigación y memoria dedicado a preservar su
              historia, compartir las fuentes que permiten conocerla y acercarla
              a las nuevas generaciones. Porque recordar no consiste únicamente
              en conservar un nombre, sino también en investigar su trayectoria,
              comprender su tiempo y transmitir su memoria con rigor.
            </p>
            <Link className="button button-dark" to="/proyecto">
              Conocer sobre el propósito del proyecto <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <SectionHeading
            eyebrow="Cronología"
            title="Una vida marcada por la historia"
            text="La cronología de Luis M. Peraza Barrios recorre los principales acontecimientos de su vida, desde su nacimiento en Cuba en 1913 hasta su regreso a la isla en 1939. A través de fechas, lugares y registros históricos, conoceremos su llegada a España, su vinculación con la XV Brigada Internacional, su paso por el frente del Ebro, su estancia en hospitales y su posterior internamiento en Francia. Cada etapa permite reconstruir una parte de su trayectoria y situarla en el contexto de la Guerra Civil española y sus consecuencias. Esta línea temporal reúne la información documentada hasta el momento y ofrece un recorrido por los acontecimientos que marcaron su experiencia, contribuyendo a preservar su historia y mantener viva la memoria de quienes formaron parte de las Brigadas Internacionales."
          />
          <div className="timeline-preview">
            {timeline.map((item, index) => (
              <div className="mini-event" key={index}>
                <span>{item.year}</span>
                <strong>{item.title}</strong>
              </div>
            ))}
          </div>
          <Link className="button button-dark" to="/biografia">
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

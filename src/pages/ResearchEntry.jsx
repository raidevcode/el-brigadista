import { ArrowLeft, CalendarDays, ExternalLink } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { research } from '../data/siteData'

export default function ResearchEntry() {
  const { slug } = useParams()
  const entry = research[Number(slug) - 1] || research[0]
  return (
    <section className="article-page">
      <div className="container article-container">
        <Link className="back-link" to="/investigacion">
          <ArrowLeft size={16} /> Volver a investigación
        </Link>
        <span className="eyebrow">{entry.category}</span>
        <h1>{entry.title}</h1>
        <div className="article-meta">
          <CalendarDays size={16} /> {entry.date}
        </div>
        <div className="article-cover placeholder-photo">
          <span>IMAGEN / DOCUMENTO DE LA INVESTIGACIÓN</span>
        </div>
        <article className="prose">
          <p className="lead">{entry.excerpt}</p>
          <h2>Objetivo</h2>
          <p>
            Esta página es una plantilla para una investigación real. Aquí se
            explicará la pregunta histórica, las fuentes utilizadas, el proceso
            de contraste y las conclusiones que la documentación permita
            sostener.
          </p>
          <h2>Fuentes y documentos</h2>
          <p>
            En la versión final se incluirán aquí las referencias exactas,
            enlaces a archivos públicos cuando proceda y los documentos
            relacionados del archivo familiar.
          </p>
          <div className="source-box">
            <strong>Fuentes relacionadas</strong>
            <p>
              Agregar referencias primarias y bibliográficas antes de publicar
              esta investigación.
            </p>
            <button className="text-link">
              Abrir fuente <ExternalLink size={15} />
            </button>
          </div>
          <h2>Estado de la investigación</h2>
          <p>
            <strong>En desarrollo.</strong> Este indicador permite distinguir
            entre información provisional, investigación completada y contenido
            pendiente de verificación.
          </p>
        </article>
      </div>
    </section>
  )
}

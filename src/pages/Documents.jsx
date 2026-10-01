import DocumentCard from '../components/DocumentCard'
import SectionHeading from '../components/SectionHeading'
import { documents, sources } from '../data/siteData'

export default function Documents() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">Archivo</span>
          <h1>Documentos y fuentes</h1>
          <p>
            Un archivo digital organizado para conservar, describir y
            contextualizar las evidencias utilizadas durante la investigación.
          </p>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="Colección"
          title="Documentos del proyecto"
          text="Cada documento debería incorporar procedencia, fecha, descripción y aquello que permite demostrar."
        />
        <div className="card-grid">
          {documents.map(doc => (
            <DocumentCard key={doc.title} document={doc} />
          ))}
        </div>
      </section>
      <section className="section section-paper">
        <div className="container sources-layout">
          <div>
            <span className="eyebrow">Bibliografía</span>
            <h2>Fuentes consultadas</h2>
            <p>
              La bibliografía no es decoración: permite al visitante seguir el
              camino de la investigación y comprobar el contexto.
            </p>
          </div>
          <ol className="source-list">
            {sources.map((source, i) => (
              <li key={source}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {source}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}

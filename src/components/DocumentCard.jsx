import { ArrowUpRight, FileText } from 'lucide-react'

export default function DocumentCard({ document }) {
  return (
    <article className="document-card">
      <div className="document-preview">
        <FileText size={34} strokeWidth={1.2} />
        <span>DOCUMENTO</span>
      </div>
      <div className="card-content">
        <span className="card-tag">{document.tag}</span>
        <h3>{document.title}</h3>
        <p>{document.description}</p>
        <div className="card-source">Fuente · {document.source}</div>
        <button className="text-link">
          Ver ficha <ArrowUpRight size={15} />
        </button>
      </div>
    </article>
  )
}

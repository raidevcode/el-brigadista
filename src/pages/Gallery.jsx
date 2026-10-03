import { ArrowDown, Camera, FileText, Medal, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { gallerySections } from '../data/galleryData'

const icons = {
  guerra: Camera,
  familia: Camera,
  medallas: Medal,
  documentos: FileText,
  otros: Camera
}

function GalleryPlaceholder({ item, onOpen }) {
  return (
    <button
      className="gallery-card"
      onClick={() => onOpen(item)}
      aria-label={`Abrir ${item.title}`}
    >
      {item.image ? (
        <img src={item.image} alt={item.description} />
      ) : (
        <span className="gallery-card-placeholder">
          <Camera size={30} strokeWidth={1.4} />
          <span>ESPACIO PARA FOTOGRAFÍA</span>
        </span>
      )}
      <span className="gallery-card-caption">
        <small>{item.type}</small>
        <strong>{item.title}</strong>
        <em>{item.description}</em>
      </span>
    </button>
  )
}

export default function Gallery() {
  const [activeSection, setActiveSection] = useState(gallerySections[0].id)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return undefined
    const onKeyDown = event => event.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [selected])

  const scrollToSection = id => {
    setActiveSection(id)
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">Archivo visual</span>
          <h1>Galería</h1>
          <p>
            Fotografías, documentos, medallas y recuerdos que ayudan a
            reconstruir la historia de Luis M. Peraza Barrios.
          </p>
          {/* <a className="gallery-scroll-link" href="#guerra">
            Explorar el archivo <ArrowDown size={15} />
          </a> */}
        </div>
      </section>

      <section className="gallery-index section-paper">
        <div className="container">
          <div className="gallery-index-intro">
            <div>
              <span className="eyebrow">Archivo visual</span>
              <h2>Una historia contada también a través de sus imágenes.</h2>
            </div>
            <p>
              Las fotografías y documentos se organizan por tipo para facilitar
              su consulta y permitir que cada pieza conserve su contexto.
            </p>
          </div>
          <nav className="gallery-tabs" aria-label="Secciones de la galería">
            {gallerySections.map(section => {
              const Icon = icons[section.id]
              return (
                <button
                  key={section.id}
                  className={
                    activeSection === section.id
                      ? 'gallery-tab active'
                      : 'gallery-tab'
                  }
                  onClick={() => scrollToSection(section.id)}
                >
                  <Icon size={16} />
                  {section.label}
                </button>
              )
            })}
          </nav>
        </div>
      </section>

      <main className="gallery-main">
        {gallerySections.map(section => (
          <section
            className="gallery-section section"
            id={section.id}
            key={section.id}
          >
            <div className="container">
              <div className="gallery-section-heading">
                <div>
                  <span className="eyebrow">{section.eyebrow}</span>
                  <h2>{section.title}</h2>
                </div>
                <p>{section.description}</p>
              </div>
              <div className="gallery-grid">
                {section.items.map(item => (
                  <GalleryPlaceholder
                    key={item.id}
                    item={item}
                    onOpen={setSelected}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onMouseDown={event =>
            event.target === event.currentTarget && setSelected(null)
          }
        >
          <button
            className="lightbox-close"
            onClick={() => setSelected(null)}
            aria-label="Cerrar"
          >
            <X />
          </button>
          <div className="lightbox-content">
            <div className="lightbox-image">
              {selected.image ? (
                <img src={selected.image} alt={selected.description} />
              ) : (
                <>
                  <Camera size={48} />
                  <span>PLACEHOLDER DE IMAGEN</span>
                </>
              )}
            </div>
            <div className="lightbox-copy">
              <small>{selected.type}</small>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

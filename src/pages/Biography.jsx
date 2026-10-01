import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  MapPin,
  Shield
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '../data/siteData'

export default function Biography() {
  return (
    <>
      <PageHero
        eyebrow="Biografía"
        title={site.personName}
        // text="Una primera reconstrucción biográfica que debe crecer a medida que se incorporen nuevas fuentes y documentos."
      />
      <section className="section container">
        <div className="bio-layout">
          <aside className="bio-facts">
            <div>
              <CalendarDays />
              <span>
                Nacimiento<strong>25 de agosto de 1913</strong>
              </span>
            </div>
            <div>
              <MapPin />
              <span>
                Lugar de nacimiento<strong>Cuba</strong>
              </span>
            </div>
            <div>
              <Shield />
              <span>
                Unidad histórica<strong>XV Brigada Internacional</strong>
              </span>
            </div>
            <div>
              <BookOpen />
              <span>
                Regreso<strong>24 de abril de 1939</strong>
              </span>
            </div>
          </aside>
          <article className="prose">
            <span className="eyebrow">Quién fue</span>
            <h2>Un cubano en las Brigadas Internacionales</h2>
            <p>
              La documentación disponible identifica a Luis M. Peraza Barrios
              como voluntario cubano de las Brigadas Internacionales durante la
              Guerra Civil Española.
            </p>
            <p>
              La ficha histórica consultada recoge su vinculación con la XV
              Brigada Internacional, su presencia en el Frente del Ebro y
              referencias a hospitales y campos de internamiento en Francia.
            </p>
            {/* <div className="callout">
              <strong>Nota metodológica</strong>
              <p>
                Esta página utiliza únicamente datos que ya aparecen en el
                material de investigación disponible. Los nuevos documentos
                deberán incorporarse con su procedencia y nivel de certeza.
              </p>
            </div> */}
            <Link className="inline-link" to="/historia">
              Seguir su recorrido histórico <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>
    </>
  )
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  )
}

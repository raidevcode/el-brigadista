import { ArrowUpRight, Heart } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { poems, story } from '../data/dedicationsData'

export default function Memories() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">Memoria · familia · homenaje</span>
          <h1>Palabras que permanecen.</h1>
          <p>
            Un espacio para conservar las dedicatorias, poemas, relatos y
            canciones que forman parte de la memoria íntima de Luis y de quienes
            lo recuerdan.
          </p>
        </div>
      </section>

      <section className="section memory-intro">
        <div className="container narrow memory-intro-inner">
          <Heart size={28} />
          <div>
            <span className="eyebrow">Memoria personal</span>
            <h2>
              La historia también vive en las palabras de quienes estuvieron
              cerca.
            </h2>
            <p>Esta sección reúne testimonios artísticos y familiares</p>
          </div>
        </div>
      </section>

      {/* <section className="section section-paper">
        <div className="container">
          <SectionHeading
            eyebrow="Dedicatorias"
            title="Luis como padre, abuelo y brigadista"
            text="Tres formas de recordar a una misma persona: desde la intimidad familiar hasta la memoria histórica."
          />
          <div className="dedication-grid">
            {dedications.map(item => (
              <article className="dedication-card" key={item.role}>
                <span className="card-tag">{item.role}</span>
                <Quote size={28} className="dedication-icon" />
                <h3>{item.title}</h3>
                <p className="dedication-text">{item.text}</p>
                <footer>
                  <strong>{item.author}</strong>
                  <span>{item.date}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="section poetry-section">
        <div className="container">
          <SectionHeading
            // eyebrow="Poesía"
            title="Dos poemas para la memoria"
            text="Espacios reservados para las poesías originales: una dedicada a Luis y otra a los Brigadistas Internacionales."
          />
          <div className="poetry-grid">
            {poems.map(poem => (
              <article className="poem-card" key={poem.title}>
                <div className="poem-mark">“</div>
                <span className="card-tag">{poem.type}</span>
                <h3>{poem.title}</h3>
                <p className="poem-intro">{poem.intro}</p>
                <div className="poem-body">
                  {poem.text.split('\n').map((line, index) => (
                    <p key={index}>{line || '\u00a0'}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper story-section">
        <div className="container story-layout">
          <img
            src="/images/portada-cuento.jpeg"
            className="story-cover-placeholder"
            alt=""
          />
          {/* <div className="story-cover-placeholder">
            <BookOpen size={40} />
            <span>PORTADA DEL CUENTO</span>
            <small>{story.title}</small>
          </div> */}
          <div className="story-copy">
            <span className="eyebrow">Literatura infantil</span>
            <h2>{story.title}</h2>
            <p>{story.description}</p>
            {/* <p>
              Cuando incorpores el PDF original, el botón permitirá abrirlo
              directamente para que el visitante pueda leer el cuento.
            </p> */}
            <a
              className="button button-dark"
              href={story.pdfPath}
              target="_blank"
              rel="noreferrer"
            >
              Abrir cuento en PDF <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* <section className="section music-section">
        <div className="container">
          <SectionHeading
            eyebrow="Música"
            title="Canciones para escuchar la memoria"
            text="Cada pieza tiene su propia portada. Sustituye los vídeos y las portadas provisionales por tus archivos originales."
          />
          <div className="songs-grid">
            {songs.map(song => (
              <article className="song-card" key={song.title}>
                <div
                  className="song-video-wrap"
                  style={{ backgroundImage: `url(${song.posterPath})` }}
                >
                  <video controls preload="metadata" poster={song.posterPath}>
                    <source src={song.videoPath} type="video/mp4" />
                    Tu navegador no puede reproducir este vídeo.
                  </video>
                  <div className="song-overlay-label">
                    <Music2 size={17} /> Vídeo · MP4
                  </div>
                </div>
                <div className="song-copy">
                  <span className="card-tag">Canción</span>
                  <h3>{song.title}</h3>
                  <p>{song.description}</p>
                  <small className="asset-note">
                    Vídeo: <code>public{song.videoPath}</code>
                  </small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}
    </>
  )
}

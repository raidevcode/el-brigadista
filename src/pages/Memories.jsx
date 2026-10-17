import { ArrowUpRight, Music2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { poems, songs, story } from '../data/dedicationsData'

export default function Memories() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">Memoria · familia · homenaje</span>
          <h1>Palabras que permanecen</h1>
          <p>
            La memoria de una persona también vive en las palabras que inspira,
            en los sentimientos que despierta y en las historias que se
            transmiten de una generación a otra. Este espacio reúne poemas,
            relatos, dedicatorias y otras expresiones literarias vinculadas a
            Luis M. Peraza Barrios y a la memoria de los Brigadistas
            Internacionales.
          </p>
          <p>
            A través de estas creaciones, la historia deja de ser únicamente una
            sucesión de fechas y acontecimientos para convertirse también en una
            experiencia humana que puede ser recordada, interpretada y
            compartida. Las palabras permiten acercarnos a esa dimensión más
            íntima de la memoria, tender puentes entre el pasado y el presente y
            transmitir a las nuevas generaciones el significado que esta
            historia conserva para su familia.
          </p>
          <p>
            Este espacio está dedicado tanto a recordar como a crear: a mantener
            viva una memoria que no pertenece únicamente al pasado, sino que
            continúa encontrando nuevas formas de expresión en el presente.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '50px' }}>
        <SectionHeading
          eyebrow="Memoria"
          title="El origen de este espacio: Mantener vivo el legado de Luis"
        />
        <p>
          Esta página nació hace unos años con un propósito muy especial: honrar
          la memoria de nuestro querido padre y abuelo. La idea surgió durante
          una emotiva reunión familiar donde estaban presentes sus hijos y
          nietos, y hoy cobra nueva vida gracias a la dedicación y apoyo de sus
          nietos para que las futuras generaciones nunca olviden la historia de
          un hombre humilde, honrado y ejemplar, tanto en sus años de lucha
          durante la guerra como en su vida posterior.
        </p>
        <p>
          Este espacio es posible gracias a las fotografías, cartas y documentos
          guardados celosamente durante décadas por la familia (algunos de los
          cuales fueron donados con orgullo al museo de su municipio natal en
          Cuba).
        </p>
        <p>
          Un agradecimiento especial a <strong>RaidevDev</strong>, cuyo valioso
          apoyo técnico e iniciativa hicieron posible actualizar y reestructurar
          esta página.
        </p>
      </div>

      <div className="container">
        <SectionHeading eyebrow="Memoria" title="Lazos de amor y gratitud" />
        <p>
          La historia de nuestra familia está marcada por el agradecimiento y el
          recuerdo constante. En casa, él siempre nos hablaba de sus vivencias
          cuando estuvo en la guerra; nosotros, con profunda curiosidad,
          observábamos la cicatriz en su pierna, marca del disparo que recibió
          durante la Guerra Civil Española.
        </p>
        <p>
          Su hija Lina lleva ese nombre en honor a Lina Odesa, la enfermera que
          le salvó la vida en momentos críticos de su juventud. Siguiendo esta
          hermosa tradición de cariño, su nieta mayor también fue nombrada Lina,
          compartiendo no solo el nombre de su tía, sino también recuerdos
          entrañables al acompañar a su abuelo a diversas actividades e
          intercambios dedicados a los combatientes en Cuba.
        </p>
        <p>
          Toda la familia lo recuerda como un padre y abuelo entregado, cariñoso
          y siempre presente. Guardamos en el corazón momentos únicos: Con su
          nieta Heather, a quien solía cantarle con ternura la canción Cachita.
          Con su nieto Javier, quien le escribió una emotiva carta de despedida
          que descansó en el bolsillo de su camisa el día de su partida. Junto a
          su incondicional esposa, Erundina, su compañera de vida de tantos
          años, quien lo acompañó con amor y fidelidad en cada paso, incluidos
          sus viajes a España.
        </p>
      </div>

      <div className="container">
        <SectionHeading
          eyebrow="Memoria"
          title="Una vida de valentía y resiliencia"
        />
        <p>
          Su vida estuvo marcada por la fortaleza. En uno de sus viajes a
          España, atravesó un momento sumamente delicado de salud debido a una
          grave dolencia pulmonar que lo mantuvo hospitalizado durante días.
          Esta condición fue una secuela imborrable de su paso por los campos de
          concentración, donde contrajo tuberculosis mientras luchaba por sus
          ideales.
        </p>
        <p>
          A pesar de las adversidades que la vida le presentó, su calidez humana
          y su dedicación a los suyos nunca se apagaron. Este sitio web es
          nuestro tributo para que su memoria, su valentía y su amor de padre
          sigan vivos por siempre.
        </p>
      </div>

      {/* <section className="section memory-intro">
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
      </section> */}

      {/* <section className="section section-paper">
        <div className="container">
          <SectionHeading
            eyebrow="Dedicatorias"
            title="Luis como padre, abuelo y brigadista."
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
            {story.description.split('\n').map((line, index) => (
              <p key={index}>{line || '\u00a0'}</p>
            ))}
            <div>
              <p>
                <strong>Autora:</strong> Lina Boligan
              </p>
              <p>
                <strong>Vínculo con Luis M. Peraza Barrios:</strong> Su nieta
              </p>
            </div>
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

      <section className="section poetry-section">
        <div className="container">
          <SectionHeading
            // eyebrow="Poesía"
            title="Dos poemas para la memoria"
            text="Esta sección reúne dos poesías originales escritas por Lina Boligan, nieta de Luis M. Peraza Barrios, como expresión personal de recuerdo, homenaje y reconocimiento. Una de las composiciones está dedicada a Luis y a la memoria familiar que su historia representa; la otra dirige su mirada hacia los Brigadistas Internacionales, aquellos voluntarios de distintos países que participaron en la defensa de la República española durante la Guerra Civil."
          />
          <p style={{ color: '#ffffff9e', marginTop: '-27px' }}>
            A través de la poesía, Lina transforma la investigación y el
            recuerdo familiar en una forma de expresión íntima, capaz de
            transmitir emociones que los documentos históricos, por sí solos, no
            siempre pueden comunicar. Sus versos constituyen un homenaje que
            enlaza generaciones: la memoria de un abuelo con la mirada de una
            nieta que busca conocer su historia, preservarla y compartirla con
            otras personas.
          </p>
          <p style={{ color: '#ffffff9e' }}>
            Estas composiciones forman parte del compromiso de mantener viva la
            memoria de Luis y de reconocer el lugar que los Brigadistas
            Internacionales ocupan en la historia democrática española.
          </p>
          <div className="section-heading">
            <p>
              <strong style={{ color: '#fff' }}>Autora:</strong> Lina Boligan
            </p>
            <p>
              <strong style={{ color: '#fff' }}>
                Vínculo con Luis M. Peraza Barrios:
              </strong>{' '}
              Su nieta
            </p>

            <p>
              <strong style={{ color: '#fff' }}>Obras:</strong> Una poesía
              dedicada a Luis y otra dedicada a los Brigadistas Internacionales.
            </p>
          </div>
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

      <section className="section music-section">
        <div className="container">
          <SectionHeading
            eyebrow="Música"
            title="Canciones para escuchar la memoria"
            text="La música también puede convertirse en una forma de recordar, rendir homenaje y mantener viva la historia. En este espacio reunimos dos canciones dedicadas a la memoria de Luis M. Peraza Barrios y a los Brigadistas Internacionales, cuyas trayectorias forman parte de la historia de la Guerra Civil española. Cada composición ofrece una manera de acercarse al pasado desde la emoción y la expresión artística: una recuerda a Luis desde su historia personal y familiar; la otra rinde homenaje a los voluntarios internacionales que participaron en la defensa de la República española. Ambas canciones buscan tender un puente entre la historia y el presente, demostrando que la memoria no solo se conserva en documentos, fotografías y testimonios, sino también en la música que nos invita a escuchar, reflexionar y recordar."
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
                  {/* <span className="card-tag">Canción</span> */}
                  <h3>{song.title}</h3>
                  <p>{song.description}</p>
                  {/* <small className="asset-note">
                    Vídeo: <code>public{song.videoPath}</code>
                  </small> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import { BookOpen, CalendarDays, MapPin, Shield } from 'lucide-react'
import { site } from '../data/siteData'

export default function Biography() {
  return (
    <>
      <PageHero
        eyebrow="Biografía del Brigadista"
        title={site.personName}
        text="Nacido en Cuba el 25 de agosto de 1913, Luis M. Peraza Barrios formó parte de los voluntarios internacionales que llegaron a España durante la Guerra Civil. Su trayectoria documental lo vincula con la XV Brigada Internacional, conocida como Brigada Abraham Lincoln. Su paso por España, los registros de su atención hospitalaria, su posterior internamiento en Francia y su regreso a Cuba en abril de 1939 permiten reconstruir una parte de su recorrido a través de uno de los periodos más dramáticos de la historia contemporánea española."
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
              <CalendarDays />
              <span>
                Llegada a España<strong>5 de febrero de 1938</strong>
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
            {/* <span className="eyebrow">Quién fue</span> */}
            <h2>¿Quién fue Luis M. Peraza Barrios?</h2>
            <p>
              Luis M. Peraza Barrios nació en Cuba el 25 de agosto de 1913. Su
              nombre forma parte de la historia de los voluntarios cubanos que
              participaron en la Guerra Civil española integrados en las
              Brigadas Internacionales, las unidades formadas por voluntarios
              extranjeros que acudieron a España para combatir junto a las
              fuerzas de la República.
            </p>
            <p>
              Su presencia en este conflicto no se conoce únicamente a través de
              la memoria familiar. Su trayectoria aparece recogida en la base de
              datos{' '}
              <a
                href="https://sidbrint.ub.edu/brigadista/peraza-barrios-luis-m"
                target="_blank"
                style={{ textDecoration: 'underline', color: '#102c3d' }}
              >
                SIDBRINT
              </a>
              , vinculada a la Universitat de Barcelona, que reúne información
              sobre los integrantes de las Brigadas Internacionales. Esta ficha
              constituye uno de los puntos de partida de la investigación que da
              origen a este archivo digital.
            </p>
            <h2>De Cuba a la guerra española</h2>
            <p>
              La información biográfica disponible sitúa su llegada a España el
              5 de febrero de 1938, a bordo del buque Oropesa. Tenía entonces 24
              años, a punto de cumplir los 25. . Estuvo alojado en el Castillo
              de Figueras (Cataluña) y posteriormente se desplazó a la Base de
              Instrucción de las Brigadas Internacionales en Tarazona de la
              Mancha (Albacete), donde recibió entrenamiento militar durante
              varios días. Su incorporación a las Brigadas Internacionales lo
              vinculó con la XV Brigada, conocida también por su relación con la
              Brigada Abraham Lincoln, y con el batallón Spanish o
              Latinoamericano, un espacio donde coincidió con numerosos
              compatriotas cubanos, entre ellos Manuel del Peso Ceballos,
              Orlando Real Álvarez y su hermano José (quien falleció en
              combate), así como los hermanos Jorge y Juan Martínez Márquez. Su
              compañía operaba bajo las órdenes del capitán cubano Raúl Rojas.
            </p>
            <p>
              Estos datos permiten situar a Luis dentro de la participación
              cubana y latinoamericana en la defensa de la República española.
              Su recorrido personal forma parte de una historia más amplia: la
              de hombres que cruzaron fronteras y océanos para intervenir en un
              conflicto que adquirió una dimensión internacional.
            </p>
            <h2>La huella de su paso por España</h2>
            <p>
              Los registros consultados relacionan su trayectoria con escenarios
              como Corbera, Gandesa, Calaceite y Batea, haciendo frente a los
              bombardeos de la aviación fascista y cumpliendo misiones de enlace
              bajo condiciones de alto peligro. Tras cruzar el Ebro en botes
              debido a la destrucción de los puentes, combatió en Mora de Ebro,
              Sierra Caballs y el Barranco de la Muerte. En estas zonas
              participó en operaciones de limpieza, atrincheramientos y misiones
              voluntarias de extrema peligrosidad para proteger emplazamientos
              de ametralladoras y cubrir la retirada de otros compañeros,
              destacando la valentía de voluntarios como Arnols Reid y Agustín
              Blanco Abad. Tras semanas de intensa actividad en el frente,
              resultó herido de gravedad en la pierna derecha. Fue atendido
              inicialmente en un centro de Vic y trasladado después al hospital
              Bonna Nova de Barcelona, donde su estado de salud se tornó crítico
              debido a las complicaciones de la lesión.
            </p>
            <p>
              No obstante, una ficha histórica no permite reconstruir por sí
              sola todas sus experiencias personales. Por ello, este proyecto
              distingue entre los acontecimientos que aparecen documentados y
              las preguntas que aún necesitan nuevas fuentes. El propósito no es
              completar los vacíos con suposiciones, sino reconstruir su
              trayectoria con el mayor rigor posible.
            </p>
            <h2>La retirada y el internamiento en Francia</h2>
            <p>
              El final de la guerra para muchos combatientes republicanos estuvo
              acompañado por la retirada hacia Francia y el internamiento en
              campos para refugiados. Durante el proceso de retirada de las
              Brigadas Internacionales (entre septiembre y noviembre de 1938),
              las tropas se concentraron en Ripoll. Al intentar cruzar la
              frontera francesa, las autoridades locales se opusieron en un
              inicio; aunque algunos combatientes intentaron regresar con un
              debilitado gobierno republicano español, finalmente se produjo el
              internamiento en territorio francés.
            </p>
            <p>
              Fue confinado en el campo de concentración de Argelès-sur-Mer, una
              zona de playa abierta con duras condiciones climáticas,
              alimentación precaria (lentejas y pan negro) y servicios
              sanitarios improvisados. La custodia del campo estaba a cargo de
              soldados coloniales senegaleses, cuyo trato estricto dio pie a
              expresiones populares que inspiraron una conocida obra musical del
              compositor cubano Julio Cueva.
            </p>
            <p>
              Estos registros sitúan su historia más allá del frente militar y
              abren otra línea de investigación: la experiencia de los
              brigadistas y otros desplazados que, tras abandonar España,
              tuvieron que afrontar el exilio y las difíciles condiciones del
              internamiento.
            </p>
            <h2>El regreso a Cuba</h2>
            <p>
              La información disponible sitúa su regreso a Cuba el 24 de abril
              de 1939. Con este dato se cierra, provisionalmente, la cronología
              conocida de su paso por España y Francia.
            </p>
            <p>
              Sin embargo, una fecha de regreso no agota una biografía. Al
              regresar de la Guerra Civil Española en 1939, Luís M. Peraza
              Barrios se reincorporó al trabajo político en el municipio de
              Arroyo Apolo. Allí integró el ejecutivo local del Partido junto a
              Ramón Pagés y Rodolfo Eanes, enfocado en las movilizaciones por la
              Asamblea Constituyente y en la posterior unificación que dio
              origen al Partido Unión Revolucionaria Comunista en 1940. En
              aquellos años, caracterizados por la escasez de recursos
              económicos, la célula local debió trasladar constantemente su sede
              por distintas ubicaciones del barrio, terminando su recorrido en
              la calle Diez de Octubre.
            </p>
            <p>
              En 1942 ingresó al Comité Nacional del Partido en Carlos III no.
              609, sirviendo como custodio de figuras fundamentales de la
              organización como Fabio Grobart, Juan Marinello y Carlos Rafael
              Rodríguez. A partir de 1953, con el paso del Partido Socialista
              Popular a la clandestinidad, desempeñó peligrosas tareas
              operativas que le valieron la prisión política en 1958. Su firmeza
              y más de dos décadas de lealtad partidista le fueron reconocidas
              en una emotiva carta firmada por Blas Roca Calderío.
            </p>
            <p>
              Con el triunfo de la Revolución en 1959, asumió importantes tareas
              en el Ministerio de las Fuerzas Armadas Revolucionarias: fue Jefe
              de la Guarnición del Palacio Presidencial (1960), Jefe de la
              Prisión Militar de La Cabaña (1961) y director del área de
              reeducación en Guanajay y el Castillo del Príncipe durante los
              años sesenta. Posteriormente, contribuyó al sector productivo en
              la Empresa de Comedores Obreros, en las zafras azucareras de
              Camagüey y en la estructuración organizativa del Comité Central
              del Partido. Culminó su trayectoria en el Departamento de
              Correspondencia junto a Secundino Guerra, acogiéndose a la
              jubilación en 1991 con 77 años de edad. En 1986 fue galardonado
              con un Diploma de Honor firmado por el Comandante en Jefe Fidel
              Castro Ruz por sus valiosos servicios a la Patria.
            </p>
            <h2>Una memoria que merece ser investigada</h2>
            <p>
              La vida de Luis M. Peraza Barrios constituye el punto de partida
              de este proyecto, pero también una invitación a investigar la
              participación cubana en la Guerra Civil española y el destino de
              quienes se vieron envueltos en ella.
            </p>
            <p>
              Recuperar su historia significa identificar los documentos,
              contrastar las fuentes, conservar los testimonios familiares y
              hacer accesible esta información. La biografía que aquí se
              presenta no pretende ser una reconstrucción definitiva, sino un
              trabajo abierto de investigación, susceptible de ampliarse y
              corregirse a medida que aparezcan nuevas evidencias.
            </p>
            <p>
              Su nombre, sus desplazamientos y los registros que han llegado
              hasta nosotros permiten comenzar esa tarea: devolver a una
              trayectoria individual el lugar que merece dentro de la memoria
              histórica colectiva.
            </p>
            {/* <div className="callout">
              <strong>Nota metodológica</strong>
              <p>
                Esta página utiliza únicamente datos que ya aparecen en el
                material de investigación disponible. Los nuevos documentos
                deberán incorporarse con su procedencia y nivel de certeza.
              </p>
            </div> */}
            {/* <Link className="button button-dark" to="/historia">
              Seguir su recorrido histórico <ArrowRight size={16} />
            </Link> */}
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

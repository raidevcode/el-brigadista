export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <article className="timeline-item" key={`${item.year}-${index}`}>
          <div className="timeline-marker">{index + 1}</div>
          <div className="timeline-year">{item.year}</div>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

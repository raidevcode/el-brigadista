import { ImageOff } from 'lucide-react'

export default function MediaPlaceholder({
  label = 'PLACEHOLDER',
  className = ''
}) {
  return (
    <div className={`media-placeholder ${className}`} aria-label={label}>
      <ImageOff size={28} strokeWidth={1.4} />
      <span>{label}</span>
    </div>
  )
}

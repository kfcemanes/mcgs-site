import { useCallback, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'
import company from '../config/company'
import useOverlay from '../hooks/useOverlay'

// How many photos to show before the "View all" button is pressed.
const INITIAL_COUNT = 9

export default function Gallery() {
  const photos = company.gallery
  const [expanded, setExpanded] = useState(false)
  const [lightbox, setLightbox] = useState(null) // index, or null when closed

  const visible = expanded ? photos : photos.slice(0, INITIAL_COUNT)

  const close = useCallback(() => setLightbox(null), [])
  const step = useCallback(
    (delta) =>
      setLightbox((i) =>
        i === null ? i : (i + delta + photos.length) % photos.length
      ),
    [photos.length]
  )

  const prev = useCallback(() => step(-1), [step])
  const next = useCallback(() => step(1), [step])

  useOverlay(lightbox !== null, { onClose: close, onPrev: prev, onNext: next })

  return (
    <section id="gallery" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-brand-red font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-center">
          Our Work
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-text text-center mb-4">
          Project Gallery
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16">
          Our crews and equipment in the field on horizontal tunneling and
          drilling projects across Canada.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {visible.map((photo, i) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setLightbox(i)}
              className="group relative aspect-[4/3] bg-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                aria-hidden="true"
              />
            </button>
          ))}
        </div>

        {!expanded && photos.length > INITIAL_COUNT && (
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="inline-block px-8 py-4 border-2 border-brand-blue text-brand-blue font-semibold text-base rounded hover:bg-brand-blue hover:text-white transition-all duration-200"
            >
              View All {photos.length} Photos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Project photo viewer"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 p-3 text-white/70 hover:text-white transition-colors"
          >
            <FaTimes size={24} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-6 p-3 text-white/70 hover:text-white transition-colors"
          >
            <FaChevronLeft size={28} />
          </button>

          <img
            src={photos[lightbox].src}
            alt={photos[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full object-contain rounded-sm"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            aria-label="Next photo"
            className="absolute right-2 sm:right-6 p-3 text-white/70 hover:text-white transition-colors"
          >
            <FaChevronRight size={28} />
          </button>

          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-widest">
            {lightbox + 1} / {photos.length}
          </span>
        </div>
      )}
    </section>
  )
}

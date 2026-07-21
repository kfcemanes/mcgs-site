import { FaRegImage } from 'react-icons/fa'

// Draft "coming soon" gallery. When real project photos are ready, replace the
// placeholder tiles below with a config-driven grid (add a `gallery` array to
// company.js and import the images from src/assets/gallery/).
const PLACEHOLDERS = Array.from({ length: 6 }, (_, i) => i)

export default function Gallery() {
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
          Photos from our horizontal tunneling and drilling projects are coming
          soon. Check back to see our crews and equipment in the field.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {PLACEHOLDERS.map((i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center justify-center gap-3 aspect-[4/3] bg-white border border-dashed border-gray-300 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Subtle brand tint on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{ backgroundColor: 'var(--color-brand-blue)' }}
                aria-hidden="true"
              />
              <FaRegImage
                size={36}
                className="text-gray-300 transition-colors duration-300 group-hover:text-gray-400"
                aria-hidden="true"
              />
              <span className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold">
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

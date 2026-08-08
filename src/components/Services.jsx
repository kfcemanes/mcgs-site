import { useCallback, useState } from 'react'
import { FaArrowRight, FaTimes } from 'react-icons/fa'
import company from '../config/company'
import useOverlay from '../hooks/useOverlay'

function ServiceCard({ service, onOpen }) {
  const Icon = service.icon

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      className="group flex flex-col text-left bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
    >
      {/* Photo header */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative p-8 flex flex-col flex-1">
        {/* Icon badge overlapping the photo */}
        <div
          className="absolute -top-7 left-8 inline-flex items-center justify-center w-14 h-14 rounded shadow-md bg-white"
          aria-hidden="true"
        >
          <Icon size={28} style={{ color: 'var(--color-brand-blue)' }} />
        </div>

        <h3 className="font-heading font-bold text-lg text-brand-text mb-3 mt-8">
          {service.title}
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm flex-1">
          {service.description}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-brand-red font-semibold text-sm">
          Learn more
          <FaArrowRight
            size={12}
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </button>
  )
}

function ServiceModal({ service, onClose }) {
  const Icon = service.icon
  useOverlay(true, { onClose })

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="relative bg-white rounded-sm shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
        >
          <FaTimes size={18} />
        </button>

        {/* Photo */}
        <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="relative p-8">
          <div
            className="absolute -top-7 left-8 inline-flex items-center justify-center w-14 h-14 rounded shadow-md bg-white"
            aria-hidden="true"
          >
            <Icon size={28} style={{ color: 'var(--color-brand-blue)' }} />
          </div>

          <h3
            id="service-modal-title"
            className="font-heading font-bold text-2xl text-brand-text mb-4 mt-8"
          >
            {service.title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-8">
            {service.description}
          </p>

          {service.details?.length > 0 && (
            <>
              <p className="text-brand-red font-semibold text-xs tracking-[0.2em] uppercase mb-4">
                About This Method
              </p>
              <ul className="space-y-3 mb-8">
                {service.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                    <span
                      className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: 'var(--color-brand-blue)' }}
                      aria-hidden="true"
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </>
          )}

          <a
            href={company.ctaHref}
            onClick={onClose}
            className="inline-block px-8 py-4 bg-brand-red text-white font-semibold text-base rounded hover:bg-red-700 transition-colors duration-200 shadow-lg"
          >
            {company.ctaLabel}
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const [openId, setOpenId] = useState(null)
  const close = useCallback(() => setOpenId(null), [])
  const active = company.services.find((s) => s.id === openId)

  return (
    <section id="services" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-brand-red font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-center">
          What We Do
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-text text-center mb-4">
          Our Services
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16">
          A specialized manpower provider for horizontal tunneling and
          drilling, supplying highly qualified, experienced professionals for
          technically demanding construction, utility, and infrastructure
          projects.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {company.services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onOpen={() => setOpenId(service.id)}
            />
          ))}
        </div>
      </div>

      {active && <ServiceModal service={active} onClose={close} />}
    </section>
  )
}

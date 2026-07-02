import company from '../config/company'

function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <div className="group bg-white border border-gray-100 rounded-sm p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div
        className="inline-flex items-center justify-center w-14 h-14 rounded mb-6"
        style={{ backgroundColor: 'rgba(24,75,135,0.08)' }}
      >
        <Icon
          size={28}
          style={{ color: 'var(--color-brand-blue)' }}
          aria-hidden="true"
        />
      </div>

      <h3 className="font-heading font-bold text-lg text-brand-text mb-3">
        {service.title}
      </h3>

      <p className="text-gray-600 leading-relaxed text-sm">
        {service.description}
      </p>

      <div
        className="mt-6 w-8 h-0.5 transition-all duration-300 group-hover:w-16"
        style={{ backgroundColor: 'var(--color-brand-red)' }}
        aria-hidden="true"
      />
    </div>
  )
}

export default function Services() {
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
          End-to-end support for industrial projects — from providing the right
          people to executing the work with precision.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {company.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

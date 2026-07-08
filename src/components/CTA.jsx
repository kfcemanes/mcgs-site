import company from '../config/company'

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-28"
      style={{ backgroundColor: 'var(--color-brand-blue)' }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <p className="text-white/60 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
          Get In Touch
        </p>

        <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
          {company.ctaHeading}
        </h2>

        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Tell us about your project. We’ll get back to you promptly with a quote and next steps.
        </p>

        <a
          href={`mailto:${company.email || 'info@example.com'}`}
          className="inline-block px-10 py-4 bg-brand-red text-white font-semibold text-base rounded hover:bg-red-500 transition-colors duration-200 shadow-lg"
        >
          {company.ctaLabel}
        </a>

        {/* Contact details */}
        {(company.phone || company.email) && (
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center text-white/60 text-sm">
            {company.phone && (
              <a
                href={`tel:${company.phone}`}
                className="hover:text-white transition-colors"
              >
                {company.phone}
              </a>
            )}
            {company.email && (
              <a
                href={`mailto:${company.email}`}
                className="hover:text-white transition-colors"
              >
                {company.email}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

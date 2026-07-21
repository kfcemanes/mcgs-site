import company from '../config/company'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <p className="text-brand-red font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-center">
          Who We Are
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-text text-center mb-16">
          About{' '}
          <span style={{ color: 'var(--color-brand-blue)' }}>
            {company.shortName}
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={company.aboutImage}
              alt="Industrial work site"
              className="w-full h-[420px] object-cover rounded-sm shadow-xl"
              loading="lazy"
            />
            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-sm opacity-20"
              style={{ backgroundColor: 'var(--color-brand-blue)' }}
              aria-hidden="true"
            />
          </div>

          {/* Copy */}
          <div>
            <h3 className="font-heading font-bold text-2xl text-brand-text mb-6">
              {company.companyName}
            </h3>

            <div className="space-y-4">
              {company.aboutParagraphs.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-10 sm:gap-14">
              {[
                { value: 'Safety', label: 'First Priority' },
                { value: 'Canadian', label: 'Owned & Operated' },
                { value: 'Proven', label: 'Track Record' },
              ].map((badge) => (
                <div key={badge.value} className="flex flex-col text-center">
                  <span
                    className="font-heading font-bold text-xl"
                    style={{ color: 'var(--color-brand-blue)' }}
                  >
                    {badge.value}
                  </span>
                  <span className="text-sm text-gray-500">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

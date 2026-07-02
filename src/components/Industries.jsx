import company from '../config/company'

function IndustryTile({ industry }) {
  const Icon = industry.icon

  return (
    <div className="group flex flex-col items-center justify-center gap-4 p-10 bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
      <div
        className="flex items-center justify-center w-16 h-16 rounded-full transition-colors duration-300"
        style={{ backgroundColor: 'rgba(24,75,135,0.08)' }}
      >
        <Icon
          size={32}
          className="transition-transform duration-300 group-hover:scale-110"
          style={{ color: 'var(--color-brand-blue)' }}
          aria-hidden="true"
        />
      </div>
      <span className="font-heading font-semibold text-brand-text text-base">
        {industry.label}
      </span>
    </div>
  )
}

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-brand-red font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-center">
          Where We Work
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-text text-center mb-4">
          Industries We Serve
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16">
          Our experience spans the major sectors driving Canada's industrial
          economy.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {company.industries.map((industry) => (
            <IndustryTile key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  )
}

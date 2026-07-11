import company from '../config/company'

function ClientTile({ client }) {
  const Wrapper = client.url ? 'a' : 'div'
  const wrapperProps = client.url
    ? { href: client.url, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`group flex flex-col items-center justify-center gap-4 p-6 sm:p-10 bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${client.url ? 'cursor-pointer' : 'cursor-default'}`}
    >
      {client.logo ? (
        <img
          src={client.logo}
          alt={client.name}
          className="max-h-20 w-auto max-w-full sm:max-w-[200px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      ) : (
        <span className="font-heading font-semibold text-brand-text text-lg">
          {client.name}
        </span>
      )}
      {client.location && (
        <span className="text-gray-400 text-xs tracking-wide uppercase">
          {client.location}
        </span>
      )}
    </Wrapper>
  )
}

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-brand-red font-semibold text-sm tracking-[0.2em] uppercase mb-3 text-center">
          Who We Work With
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-text text-center mb-4">
          Our Clients & Partners
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16">
          Trusted by leading contractors and project owners across Canada.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {company.clients.map((client) => (
            <ClientTile key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  )
}

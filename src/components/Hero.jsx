import company from '../config/company'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${company.heroImage})` }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/40"
        aria-hidden="true"
      />

      {/* Blue tint overlay for brand cohesion */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundColor: company.primaryColor }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
        <h1
          className="font-heading font-extrabold text-[clamp(1.875rem,9vw,2.25rem)] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] sm:leading-[1.05] tracking-tight mb-6 whitespace-pre-line"
          style={{ textShadow: '0 3px 24px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.5)' }}
        >
          {/* Split on the bare ampersand so surrounding whitespace — including
              any \n line break from the config — survives untouched. */}
          {company.tagline.split('&').map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && <span className="text-brand-red">&</span>}
            </span>
          ))}
        </h1>

        {/* Accent rule ties the sub-headline back to the brand red */}
        <div className="flex justify-center mb-6">
          <span className="block w-28 h-1.5 rounded-full bg-brand-red" aria-hidden="true" />
        </div>

        <p
          className="font-heading font-bold text-lg sm:text-2xl md:text-3xl text-white leading-snug mb-10 max-w-3xl mx-auto text-balance whitespace-normal sm:whitespace-pre-line"
          style={{ textShadow: '0 2px 14px rgba(0,0,0,0.55)' }}
        >
          {company.subtagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={company.heroCtaHref}
            className="inline-block px-8 py-4 bg-brand-red text-white font-semibold text-base rounded hover:bg-red-700 transition-colors duration-200 shadow-lg"
          >
            {company.heroCtaLabel}
          </a>
          <a
            href="#about"
            className="inline-block px-8 py-4 border-2 border-white/60 text-white font-semibold text-base rounded hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  )
}

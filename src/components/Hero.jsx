import company from '../config/company'
import logo from '../assets/mcgs-logo-transparent.png'

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
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        {/* Brand mark — seated on a white disc so the navy lettering never has
            to compete with the blue-tinted overlay behind it */}
        <div className="relative inline-flex items-center justify-center mb-8">
          {/* Soft halo so the disc settles into the photo instead of pasting onto it */}
          {/* The PNG carries uneven transparent margin (≈5.6% sides, 10% top,
              4.8% bottom), so the disc is inset to the circular artwork itself
              rather than padded off the image box. */}
          <div
            className="absolute rounded-full bg-white/15 blur-2xl"
            style={{ top: '4.5%', bottom: '0.5%', left: '2.5%', right: '2.5%' }}
            aria-hidden="true"
          />
          <div
            className="absolute rounded-full bg-white/55 shadow-md"
            style={{ top: '4.5%', bottom: '0.5%', left: '2.5%', right: '2.5%' }}
            aria-hidden="true"
          />
          <img
            src={logo}
            alt={company.companyName}
            className="relative block h-40 md:h-52 lg:h-60 w-auto"
          />
        </div>

        <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug mb-5 max-w-4xl mx-auto">
          {company.tagline.split(' & ').map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <>
                  {' '}
                  <span className="text-brand-red">&</span>{' '}
                </>
              )}
            </span>
          ))}
        </h1>

        <p className="text-base sm:text-lg text-white/75 mb-10 max-w-2xl mx-auto">
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

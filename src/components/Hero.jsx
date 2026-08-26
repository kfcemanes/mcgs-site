import company from '../config/company'

/**
 * Renders the company name with the letters that spell out the MCGS acronym
 * picked out in the accent colour, so the headline reads as an abbreviation of
 * the line beneath it. Walks the acronym in order and claims the first word
 * whose initial matches, so "&" is skipped rather than consumed by "G".
 */
function renderAcronymHighlight(text, acronym) {
  let cursor = 0
  return text.split(/(\s+)/).map((token, i) => {
    if (token === '&') {
      return (
        <span key={i} className="text-brand-red">
          &
        </span>
      )
    }
    if (cursor < acronym.length && token.charAt(0).toUpperCase() === acronym[cursor]) {
      cursor += 1
      return (
        <span key={i}>
          {/* A thin white edge lifts the navy off the dark hero so the letter
              reads as emphasised rather than faded. */}
          <span
            className="text-brand-blue font-extrabold"
            style={{
              textShadow:
                '1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 1px 1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff, 0 2px 12px rgba(0,0,0,0.5)',
            }}
          >
            {token.charAt(0)}
          </span>
          {token.slice(1)}
        </span>
      )
    }
    return <span key={i}>{token}</span>
  })
}

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
        {/* Headline is the MCGS mark itself: logo navy, outlined in white so
            it reads against the dark hero the way the logo badge does. */}
        <h1 className="font-logo font-extrabold text-brand-blue text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-[0.08em] mb-6">
          {/* Two stacked copies rather than a text-shadow ring: Chrome includes
              -webkit-text-stroke when it casts text-shadow but Safari does not,
              which made the ring render inconsistently on iOS. Here the white
              ring is a stroke on a copy sitting behind, so both engines paint it
              the same way. Widths are in em so the ring stays proportional at
              every breakpoint. */}
          <span
            className="relative inline-block -mr-[0.08em]"
            style={{
              filter:
                'drop-shadow(0 0 28px rgba(255,255,255,0.35)) drop-shadow(0 10px 30px rgba(0,0,0,0.55))',
            }}
          >
            {/* Ring from sixteen offset copies rather than a stroke: a stroke
                miters sharp corners into spikes on the M apex, and this copy
                carries no stroke, so Chrome and Safari cast identical shadows. */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 w-full select-none"
              style={{
                textShadow: [
                  [0.06, 0],
                  [0.055, 0.023],
                  [0.042, 0.042],
                  [0.023, 0.055],
                  [0, 0.06],
                  [-0.023, 0.055],
                  [-0.042, 0.042],
                  [-0.055, 0.023],
                  [-0.06, 0],
                  [-0.055, -0.023],
                  [-0.042, -0.042],
                  [-0.023, -0.055],
                  [0, -0.06],
                  [0.023, -0.055],
                  [0.042, -0.042],
                  [0.055, -0.023],
                ]
                  .map(([x, y]) => `${x}em ${y}em 0.008em #fff`)
                  .join(', '),
              }}
            >
              {company.tagline}
            </span>
            {/* Michroma ships at weight 400 only, so font-extrabold is faux
                bold; a same-colour stroke fattens the navy for real. */}
            <span className="relative" style={{ WebkitTextStroke: '0.04em #184b87' }}>
              {company.tagline}
            </span>
          </span>
        </h1>

        {/* Accent rule ties the sub-headline back to the brand red */}
        <div className="flex justify-center mb-6">
          <span className="block w-28 h-1.5 rounded-full bg-brand-red" aria-hidden="true" />
        </div>

        <p
          className="font-heading font-bold text-xl sm:text-3xl md:text-4xl text-white leading-snug mb-4 max-w-3xl mx-auto text-balance"
          style={{ textShadow: '0 2px 14px rgba(0,0,0,0.55)' }}
        >
          {renderAcronymHighlight(company.subtagline, company.shortName)}
        </p>

        <p
          className="text-base sm:text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto whitespace-pre-line"
          style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}
        >
          {company.heroSupport}
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

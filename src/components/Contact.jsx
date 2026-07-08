import { useState } from 'react'
import company from '../config/company'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const onSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')

    const formData = new FormData(event.target)
    formData.append('access_key', company.web3formsKey)
    formData.append('subject', `New inquiry from ${company.shortName} website`)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setStatus('success')
        event.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="py-24"
      style={{ backgroundColor: 'var(--color-brand-blue)' }}
    >
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: messaging + contact info */}
        <div className="text-white lg:pt-4">
          <p className="text-white/60 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </p>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
            {company.ctaHeading}
          </h2>

          <p className="text-white/70 text-lg mb-10 max-w-xl">
            Tell us about your project and we'll get back to you promptly with a quote and next steps.
          </p>

          {(company.phone || company.email) && (
            <div className="flex flex-col gap-4 text-white/80">
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

        {/* Right: form card */}
        <div className="bg-white rounded-sm shadow-xl p-8">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />

            <textarea
              name="message"
              placeholder="Tell us about your project"
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
            />

            {/* Honeypot field to deter spam bots */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full px-10 py-4 bg-brand-red text-white font-semibold text-base rounded hover:bg-red-500 transition-colors duration-200 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-center font-medium">
                Thanks! Your message has been sent — we'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center font-medium">
                Something went wrong. Please try again or email us directly at{' '}
                <a href={`mailto:${company.email}`} className="underline">
                  {company.email}
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

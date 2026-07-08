import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import company from '../config/company'
import logo from '../assets/mcgs-logo-transparent.png'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <img src={logo} alt={company.shortName} className="h-14 w-auto" />
            <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-xs">
              {company.companyName}
            </p>
            <p className="mt-2 text-gray-500 text-xs italic">
              {company.footerTagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-widest uppercase text-gray-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {company.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-widest uppercase text-gray-400 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <FaMapMarkerAlt
                  className="mt-0.5 shrink-0 text-brand-red"
                  aria-hidden="true"
                />
                <span>{company.address}</span>
              </li>

              {company.phone ? (
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <FaPhone className="shrink-0 text-brand-red" aria-hidden="true" />
                  <a
                    href={`tel:${company.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {company.phone}
                  </a>
                </li>
              ) : (
                <li className="flex items-center gap-3 text-sm text-gray-600 italic">
                  <FaPhone className="shrink-0" aria-hidden="true" />
                  <span>Phone — coming soon</span>
                </li>
              )}

              {company.email ? (
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <FaEnvelope
                    className="shrink-0 text-brand-red"
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${company.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {company.email}
                  </a>
                </li>
              ) : (
                <li className="flex items-center gap-3 text-sm text-gray-600 italic">
                  <FaEnvelope className="shrink-0" aria-hidden="true" />
                  <span>Email — coming soon</span>
                </li>
              )}
            </ul>

            {/* Registration numbers */}
            {(company.businessNumber || company.gstNumber) && (
              <div className="mt-6 space-y-1 text-xs text-gray-600">
                {company.businessNumber && (
                  <p>Business No. {company.businessNumber}</p>
                )}
                {company.gstNumber && <p>GST No. {company.gstNumber}</p>}
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>
            &copy; {company.copyrightYear} {company.companyName}. All rights
            reserved.
          </p>
          <p>Calgary, Alberta, Canada</p>
        </div>
      </div>
    </footer>
  )
}

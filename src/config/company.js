/**
 * Company configuration — the single file to edit when deploying this
 * template for a new client. All components read from here; no component
 * logic needs to change between clients.
 */

import {
  FaHardHat,
  FaBuilding,
  FaClipboardList,
} from 'react-icons/fa'
import {
  GiDrill,
  GiMining,
  GiOilDrum,
  GiCrane,
  GiRoad,
} from 'react-icons/gi'

const company = {
  // ─── Identity ───────────────────────────────────────────────────────────────
  companyName: 'Marbel Contracting & General Services',
  shortName: 'MCGS',
  tagline: 'Reliable Manpower & Drilling Solutions',
  subtagline: 'Supporting Canadian Industrial Projects',
  businessNumber: '',
  gstNumber: '',

  // ─── Contact ────────────────────────────────────────────────────────────────
  phone: '1.403.499.8780',
  email: 'mcgsphilcan@gmail.com',
  address: '164 Castlegen Way NE, Calgary AB T3J 1V6',

  // ─── Brand ──────────────────────────────────────────────────────────────────
  primaryColor: '#184B87',
  accentColor: '#E53935',

  // ─── Navigation links (href = section id) ───────────────────────────────────
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Contact', href: '#contact' },
  ],

  // ─── Hero ───────────────────────────────────────────────────────────────────
  heroImage:
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
  heroCtaLabel: 'Request a Quote',
  heroCtaHref: '#contact',

  // ─── About ──────────────────────────────────────────────────────────────────
  aboutImage:
    'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900&q=80',
  aboutParagraphs: [
    'Founded in 2018, Marbel Contracting & General Services (MCGS) is a Filipino-owned Canadian company providing specialized workforce solutions and drilling services across Western Canada. Serving the construction, utility, industrial, energy, and infrastructure sectors, MCGS was established with a clear mission: to bridge the growing demand for qualified skilled trades and technical professionals. By delivering dependable manpower and specialized field services, the company enables clients to complete projects safely, efficiently, and strictly on schedule.',
    "As a business built on the core values of integrity, resilience, respect, and hard work, MCGS takes pride in fostering long-term partnerships with clients, employees, and industry partners alike. Their multicultural team proudly reflects the diversity of Canada's workforce. Together, they share a deeply ingrained, common commitment to professionalism, accountability, and operational excellence in everything they do.",
    'Whether supplying skilled manpower or delivering specialized drilling services, MCGS remains dedicated to helping clients overcome complex workforce challenges and maintain peak productivity. By consistently providing reliable support, they ensure partners can successfully execute intricate projects with total confidence.',
  ],

  // ─── Services ───────────────────────────────────────────────────────────────
  services: [
    {
      id: 'manpower',
      icon: FaHardHat,
      title: 'Manpower Supply',
      description:
        'Qualified tradespeople, labourers, and supervisors deployed on short notice. We maintain a roster of vetted, safety-trained personnel ready for your next project.',
    },
    {
      id: 'drilling',
      icon: GiDrill,
      title: 'Drilling Services',
      description:
        'Directional drilling, water-well drilling, and geotechnical drilling for exploration and construction projects across Alberta and beyond.',
    },
    {
      id: 'contracting',
      icon: FaBuilding,
      title: 'General Contracting',
      description:
        'Full-scope general contracting for civil, industrial, and commercial projects. From site preparation through final inspection, we manage it all.',
    },
    {
      id: 'support',
      icon: FaClipboardList,
      title: 'Project Support',
      description:
        'Site supervision, logistics coordination, procurement, and project management support to keep your operations running on time and on budget.',
    },
  ],

  // ─── Industries ─────────────────────────────────────────────────────────────
  industries: [
    { id: 'mining', icon: GiMining, label: 'Mining' },
    { id: 'oil-gas', icon: GiOilDrum, label: 'Oil & Gas' },
    { id: 'construction', icon: GiCrane, label: 'Construction' },
    { id: 'infrastructure', icon: GiRoad, label: 'Infrastructure' },
  ],

  // ─── CTA ────────────────────────────────────────────────────────────────────
  ctaHeading: 'Ready to discuss your next project?',
  ctaLabel: 'Request a Quote',
  ctaHref: '#contact',

  // ─── Footer ─────────────────────────────────────────────────────────────────
  footerTagline: 'Reliable. Professional. Canadian.',
  copyrightYear: new Date().getFullYear(),
}

export default company

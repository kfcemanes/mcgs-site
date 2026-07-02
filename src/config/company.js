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
  phone: '',
  email: '',
  address: 'Calgary, Alberta',

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
    'Marbel Contracting & General Services is a Canadian company specializing in reliable manpower supply and drilling services for industrial projects across Western Canada.',
    'We understand that every project comes with its own set of challenges. Our team brings decades of combined experience in oil & gas, mining, and heavy civil construction — delivering qualified personnel and technical services when and where you need them.',
    'Locally owned and operated, we are committed to safety, quality, and building long-term relationships with our clients.',
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

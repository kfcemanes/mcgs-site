/**
 * Company configuration — the single file to edit when deploying this
 * template for a new client. All components read from here; no component
 * logic needs to change between clients.
 */

import {
  FaHardHat,
} from 'react-icons/fa'
import {
  GiDrill,
  GiDigHole,
  GiPipes,
  GiWaterDrop,
  GiCargoCrane,
  GiMining,
  GiOilDrum,
  GiCrane,
  GiRoad,
} from 'react-icons/gi'
import york1Logo from '../assets/york1-logo.svg'
import sovereignLogo from '../assets/sovereign-logo.png'

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
  web3formsKey: '1321916d-1dee-48dc-b33c-205ba0365c46',

  // ─── Brand ──────────────────────────────────────────────────────────────────
  primaryColor: '#184B87',
  accentColor: '#E53935',

  // ─── Navigation links (href = section id) ───────────────────────────────────
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Clients', href: '#clients' },
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
    'Founded in 2018, Marbel Contracting & General Services (MCGS) is a Filipino-owned Canadian company providing skilled workforce solutions and specialized drilling services across Western Canada. Serving the construction, utility, industrial, energy, and infrastructure sectors, MCGS helps clients meet workforce demands and deliver projects safely, efficiently, and on schedule.',
    'Built on the values of integrity, resilience, respect, and hard work, MCGS is committed to professionalism, accountability, and long-term partnerships. With a diverse, multicultural team, the company provides reliable manpower and field services that help clients overcome workforce challenges and complete complex projects with confidence.',
  ],

  // ─── Services ───────────────────────────────────────────────────────────────
  services: [
    {
      id: 'manpower',
      icon: FaHardHat,
      title: 'Manpower Solutions',
      description:
        'Highly qualified, experienced professionals supplied to the construction, utility, and infrastructure sectors — vetted, safety-trained, and ready for technically demanding projects.',
    },
    {
      id: 'hdd',
      icon: GiDrill,
      title: 'Horizontal Directional Drilling',
      description:
        'Skilled crews for HDD operations, delivering precise trenchless installation of pipelines and utilities beneath roads, waterways, and sensitive terrain.',
    },
    {
      id: 'trenchless',
      icon: GiDigHole,
      title: 'Trenchless Construction',
      description:
        'Specialized personnel for auger boring, pipe jacking, and microtunneling — minimizing surface disruption on complex trenchless construction projects.',
    },
    {
      id: 'underground-utilities',
      icon: GiPipes,
      title: 'Underground Utility Installation',
      description:
        'Experienced tradespeople for sewer and watermain installation, gas distribution, and electrical utility work, executed to code and on schedule.',
    },
    {
      id: 'hydro-excavation',
      icon: GiWaterDrop,
      title: 'Hydro Excavation',
      description:
        'Trained hydro excavation crews providing safe, precise, non-destructive digging around existing underground infrastructure.',
    },
    {
      id: 'heavy-civil',
      icon: GiCargoCrane,
      title: 'Heavy Civil Construction',
      description:
        'Manpower for heavy civil construction projects, supporting general contractors and project owners with skilled labour from mobilization through completion.',
    },
  ],

  // ─── Industries ─────────────────────────────────────────────────────────────
  industries: [
    { id: 'mining', icon: GiMining, label: 'Mining' },
    { id: 'oil-gas', icon: GiOilDrum, label: 'Oil & Gas' },
    { id: 'construction', icon: GiCrane, label: 'Construction' },
    { id: 'infrastructure', icon: GiRoad, label: 'Infrastructure' },
  ],

  // ─── Clients ────────────────────────────────────────────────────────────────
  clients: [
    {
      id: 'york1',
      name: 'York1',
      location: 'Toronto, ON',
      logo: york1Logo,
      url: 'https://york1.com/',
    },
    {
      id: 'sovereign',
      name: 'Sovereign',
      location: 'Bolton, ON',
      logo: sovereignLogo,
      url: 'https://sovereign.build/',
    },
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

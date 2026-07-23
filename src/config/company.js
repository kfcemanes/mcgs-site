/**
 * Company configuration — the single file to edit when deploying this
 * template for a new client. All components read from here; no component
 * logic needs to change between clients.
 */

import {
  GiDrill,
  GiBulldozer,
  GiHammerDrop,
  GiMining,
  GiPipes,
  GiConcreteBag,
  GiOilDrum,
  GiCrane,
  GiSuspensionBridge,
} from 'react-icons/gi'
import york1Logo from '../assets/york1-logo.svg'
import sovereignLogo from '../assets/sovereign-logo.png'
import elliottLogo from '../assets/elliott-logo.png'

const company = {
  // ─── Identity ───────────────────────────────────────────────────────────────
  companyName: 'Marbel Contracting & General Services',
  shortName: 'MCGS',
  tagline: 'Reliable Manpower for Horizontal Tunneling & Drilling Solutions',
  subtagline: 'Supporting Canadian underground horizontal drilling projects',
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
    { label: 'Gallery', href: '#gallery' },
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
    'Founded in 2018, Marbel Contracting & General Services (MCGS) is a Canadian-owned company providing a skilled workforce specialized in horizontal tunneling and drilling solutions across Canada. Serving the construction, utility, industrial, energy, and infrastructure sectors, MCGS helps clients meet workforce demands and deliver projects safely, efficiently, and on schedule.',
    'Built on the values of integrity, resilience, respect, and hard work, MCGS is committed to professionalism, accountability, and long-term partnerships. With a diverse, multicultural team, the company provides reliable manpower and field services that help clients overcome workforce challenges and complete complex projects with confidence.',
  ],

  // ─── Services ───────────────────────────────────────────────────────────────
  services: [
    {
      id: 'augering',
      icon: GiDrill,
      title: 'Horizontal Augering / Jack & Bore',
      description:
        'Skilled crews for jack-and-bore auger operations, installing steel casings beneath roads, rail, and embankments with minimal surface disruption.',
    },
    {
      id: 'gbm',
      icon: GiBulldozer,
      title: 'Guided Boring Machine (GBM) Installation',
      description:
        'Experienced operators for guided boring machine installs, delivering accurate, line-and-grade-controlled bores for gravity sewers and utility crossings.',
    },
    {
      id: 'pipe-ramming',
      icon: GiHammerDrop,
      title: 'Pipe Ramming (Guided & Unguided)',
      description:
        'Trained personnel for guided and unguided pipe ramming, driving casings through difficult ground and beneath obstacles where other methods fall short.',
    },
    {
      id: 'hand-tunneling',
      icon: GiMining,
      title: 'Hand Tunneling / Hand Mining',
      description:
        'Specialized labour for hand tunneling and hand mining in confined or sensitive conditions, excavating with precision where mechanized methods aren’t feasible.',
    },
    {
      id: 'product-pipe',
      icon: GiPipes,
      title: 'Product Pipe Installation',
      description:
        'Qualified tradespeople for product and carrier pipe installation, placement, and tie-ins — completed to specification and on schedule.',
    },
    {
      id: 'casing-grouting',
      icon: GiConcreteBag,
      title: 'Casing Grouting',
      description:
        'Crews for casing grouting and annular space filling, ensuring long-term stability and protection of installed casings and product pipes.',
    },
  ],

  // ─── Industries ─────────────────────────────────────────────────────────────
  industries: [
    { id: 'mining', icon: GiMining, label: 'Mining' },
    { id: 'oil-gas', icon: GiOilDrum, label: 'Oil & Gas' },
    { id: 'construction', icon: GiCrane, label: 'Construction' },
    { id: 'civil-infrastructure', icon: GiSuspensionBridge, label: 'Civil Infrastructure' },
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
    {
      id: 'elliott',
      name: 'Elliott Underground',
      location: "Lisle, ON",
      logo: elliottLogo,
      url: 'https://elliottunderground.com/',
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

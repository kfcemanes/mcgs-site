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
import heroImage from '../assets/hero.jpg'
import aboutImage from '../assets/about.jpg'
import augeringImage from '../assets/services/horizontal-augering.jpg'
import gbmImage from '../assets/services/guided-boring-machine.jpg'
import pipeRammingImage from '../assets/services/pipe-ramming.jpg'
import handTunnelingImage from '../assets/services/hand-tunneling.jpg'
import productPipeImage from '../assets/services/product-pipe-installation.jpg'
import casingGroutingImage from '../assets/services/casing-grouting.jpg'

// Gallery photos are picked up automatically from src/assets/gallery/ — drop a
// new project-NN.jpg in that folder and it appears on the site, no code change.
const galleryImages = import.meta.glob('../assets/gallery/*.jpg', {
  eager: true,
  import: 'default',
})
const gallery = Object.keys(galleryImages)
  .sort()
  .map((path, i) => ({
    id: path.split('/').pop().replace('.jpg', ''),
    src: galleryImages[path],
    alt: `MCGS crew on a horizontal tunneling and drilling project (${i + 1})`,
  }))

const company = {
  // ─── Identity ───────────────────────────────────────────────────────────────
  companyName: 'Marbel Contracting & General Services',
  shortName: 'MCGS',
  tagline: 'Reliable Manpower for Horizontal Augering and Tunneling Trenchless Solutions',
  subtagline: 'Supporting Canadian trenchless horizontal drilling projects',
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
  heroImage,
  heroCtaLabel: 'Request a Quote',
  heroCtaHref: '#contact',

  // ─── About ──────────────────────────────────────────────────────────────────
  aboutImage,
  aboutParagraphs: [
    'Founded in 2018, Marbel Contracting & General Services (MCGS) is a Canadian-owned company providing a skilled workforce specialized in horizontal tunneling and drilling solutions across Canada. Serving the construction, utility, industrial, energy, and infrastructure sectors, MCGS helps clients meet workforce demands and deliver projects safely, efficiently, and on schedule.',
    'Built on the values of integrity, resilience, respect, and hard work, MCGS is committed to professionalism, accountability, and long-term partnerships. With a diverse, multicultural team, the company provides reliable manpower and field services that help clients overcome workforce challenges and complete complex projects with confidence.',
  ],

  // ─── Services ───────────────────────────────────────────────────────────────
  services: [
    {
      id: 'augering',
      icon: GiDrill,
      image: augeringImage,
      title: 'Horizontal Augering / Jack & Bore',
      description:
        'Skilled crews for jack-and-bore auger operations, installing steel casings beneath roads, rail, and embankments with minimal surface disruption.',
      details: [
        'Steel casing is jacked forward from a launch pit while a rotating auger removes spoil through the casing.',
        'Typically specified for road, rail, and embankment crossings where open-cut excavation is not permitted.',
        'Crews handle pit setup, track alignment, welding of casing sections, and spoil management.',
        'Best suited to stable, cohesive soils above the water table.',
      ],
    },
    {
      id: 'gbm',
      icon: GiBulldozer,
      image: gbmImage,
      title: 'Guided Boring Machine (GBM) Installation',
      description:
        'Experienced operators for guided boring machine installs, delivering accurate, line-and-grade-controlled bores for gravity sewers and utility crossings.',
      details: [
        'A pilot tube is steered to line and grade using a theodolite guidance system before the casing follows.',
        'Delivers the tight grade tolerances that gravity sewers require.',
        'Runs as a three-phase process: guided pilot bore, reaming, then product pipe installation.',
        'Operators monitor the steering head continuously and correct alignment throughout the drive.',
      ],
    },
    {
      id: 'pipe-ramming',
      icon: GiHammerDrop,
      image: pipeRammingImage,
      title: 'Pipe Ramming (Guided & Unguided)',
      description:
        'Trained personnel for guided and unguided pipe ramming, driving casings through difficult ground and beneath obstacles where other methods fall short.',
      details: [
        'A pneumatic hammer drives the casing forward from the launch pit under percussive force.',
        'Handles cobbles, boulders, and mixed fill that can stop an auger bore.',
        'The open-ended casing is cleaned out after the drive is complete.',
        'Can be carried out below the water table and beneath live infrastructure.',
      ],
    },
    {
      id: 'hand-tunneling',
      icon: GiMining,
      image: handTunnelingImage,
      title: 'Hand Tunneling / Hand Mining',
      description:
        'Specialized labour for hand tunneling and hand mining in confined or sensitive conditions, excavating with precision where mechanized methods aren’t feasible.',
      details: [
        'Excavation is carried out by hand within liner plate, ribs-and-lagging, or a shored heading.',
        'Chosen for short drives, tight clearances, and locations with known obstructions.',
        'Requires confined space entry procedures and continuous atmospheric monitoring.',
        'Lets crews work carefully around unmapped or sensitive existing utilities.',
      ],
    },
    {
      id: 'product-pipe',
      icon: GiPipes,
      image: productPipeImage,
      title: 'Product Pipe Installation',
      description:
        'Qualified tradespeople for product and carrier pipe installation, placement, and tie-ins — completed to specification and on schedule.',
      details: [
        'Carrier pipe is installed inside the completed casing on skids or casing spacers.',
        'Covers joint assembly, alignment to design grade, and tie-ins to existing infrastructure.',
        'End seals are fitted to close off the annular space once the pipe is set.',
      ],
    },
    {
      id: 'casing-grouting',
      icon: GiConcreteBag,
      image: casingGroutingImage,
      title: 'Casing Grouting',
      description:
        'Crews for casing grouting and annular space filling, ensuring long-term stability and protection of installed casings and product pipes.',
      details: [
        'The annular space between casing and product pipe is filled with grout.',
        'Prevents voids and long-term settlement over the completed crossing.',
        'Placed in controlled stages with pressure monitored to avoid floating the carrier pipe.',
      ],
    },
  ],

  // ─── Gallery ────────────────────────────────────────────────────────────────
  gallery,

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

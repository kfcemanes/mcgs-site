# MCGS Site — Structure & Feature Guide

This document explains how the website is built, what each piece does, and how to work with it.

---

## Table of Contents

1. [What the site looks like](#1-what-the-site-looks-like)
2. [Folder structure](#2-folder-structure)
3. [The config file](#3-the-config-file)
4. [Components](#4-components)
5. [Shared behaviour: the overlay hook](#5-shared-behaviour-the-overlay-hook)
6. [Styling system](#6-styling-system)
7. [Deployment pipeline](#7-deployment-pipeline)
8. [How to reuse for a new client](#8-how-to-reuse-for-a-new-client)

---

## 1. What the site looks like

The site is a **single-page scrolling website**. There is no routing — everything lives on one page and users scroll through it or click nav links that jump to sections.

Sections from top to bottom:

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Navbar** | Sticky top navigation with logo, links to each section |
| 2 | **Hero** | Full-screen opening with headline and two CTA buttons |
| 3 | **About** | Company description with a field photo and trust badges |
| 4 | **Services** | Six photo cards; clicking one opens a detail modal |
| 5 | **Industries** | Grid of industries the company serves |
| 6 | **Gallery** | Project photo grid with "view all" expansion and a lightbox |
| 7 | **Clients** | Logo tiles for clients, linking to their sites |
| 8 | **Contact** | Brand-blue block with contact details and a working enquiry form |
| 9 | **Footer** | Contact details, nav links, legal info |

Component order is set in `src/App.jsx`. `Navbar` and `Footer` sit outside `<main>`; everything else is inside it.

---

## 2. Folder structure

```
mcgs-site/
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment to GitHub Pages
│
├── public/
│   ├── CNAME                   # Custom domain — copied into dist on build
│   ├── favicon.ico
│   ├── favicon-16.png
│   ├── favicon-32.png
│   └── apple-touch-icon.png
│
├── src/
│   ├── config/
│   │   └── company.js          ← THE ONE FILE YOU EDIT PER CLIENT
│   │
│   ├── assets/
│   │   ├── hero.jpg
│   │   ├── about.jpg
│   │   ├── mcgs-logo.png
│   │   ├── mcgs-logo-transparent.png   # used in Navbar + Footer
│   │   ├── york1-logo.svg              # client logos
│   │   ├── sovereign-logo.png
│   │   ├── elliott-logo.png
│   │   ├── services/                   # one photo per service card
│   │   │   ├── horizontal-augering.jpg
│   │   │   ├── guided-boring-machine.jpg
│   │   │   ├── pipe-ramming.jpg
│   │   │   ├── hand-tunneling.jpg
│   │   │   ├── product-pipe-installation.jpg
│   │   │   └── casing-grouting.jpg
│   │   └── gallery/                    # project-NN.jpg — auto-discovered
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Industries.jsx
│   │   ├── Gallery.jsx
│   │   ├── Clients.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── hooks/
│   │   └── useOverlay.js       # Escape / arrow keys / scroll lock for modals
│   │
│   ├── App.jsx                 # Assembles all components in order
│   ├── index.css               # Tailwind import + brand color tokens
│   └── main.jsx                # React entry point
│
├── index.html                  # HTML shell, loads fonts + React
├── vite.config.js              # Vite + Tailwind plugin config
└── package.json                # Dependencies and npm scripts
```

### How data flows

```
company.js  →  imported by each component  →  rendered on screen
```

No component contains hardcoded client contact details, service copy, or industry labels — those all come from `company.js`. A few section headings and intro sentences ("What We Do", "Our experience spans the major sectors…") do live in the JSX; see the note in section 8.

### Images are bundled, not hotlinked

All photos are imported from `src/assets/` in `company.js` (or directly in the component, for the logo). Vite fingerprints and bundles them at build time. There are no external image URLs.

---

## 3. The config file

**`src/config/company.js`** is the control panel for the entire site.

### What it contains

```
Identity      companyName, shortName, tagline, subtagline
              businessNumber, gstNumber

Contact       phone, email, address, web3formsKey

Brand         primaryColor, accentColor

Navigation    navLinks  →  array of { label, href }

Hero          heroImage, heroCtaLabel, heroCtaHref

About         aboutImage, aboutParagraphs (array of strings)

Services      services  →  array of { id, icon, image, title, description, details[] }

Gallery       gallery  →  auto-generated (see below)

Industries    industries  →  array of { id, icon, label }

Clients       clients  →  array of { id, name, location, logo, url }

CTA           ctaHeading, ctaLabel, ctaHref

Footer        footerTagline, copyrightYear
```

### The gallery builds itself

The `gallery` array is not hand-written. `company.js` uses Vite's `import.meta.glob` to pick up every `.jpg` in `src/assets/gallery/`, sorted by filename:

```js
const galleryImages = import.meta.glob('../assets/gallery/*.jpg', {
  eager: true,
  import: 'default',
})
```

**To add a photo:** drop a `project-NN.jpg` into `src/assets/gallery/` and push. No code change. Numbering gaps are fine (the current set skips `project-19`). Only `.jpg` is matched — a `.png` or `.jpeg` will be silently ignored.

### Icons

Icons come from the `react-icons` library and are imported directly in `company.js`. The `icon` field holds the **component itself**, not a string name:

```js
import { GiDrill } from 'react-icons/gi'

services: [
  { id: 'augering', icon: GiDrill, title: 'Horizontal Augering / Jack & Bore', ... }
]
```

Services and industries currently use the `gi` (Game Icons) set. The `fa` set is used inside components for UI chrome — arrows, close buttons, contact icons.

To change an icon, find a new one at **react-icons.github.io**, import it, and swap it in.

### Service `details`

Each service carries a `details` array of short sentences. These are only rendered inside the service modal, under an "About This Method" heading. If a service has no `details`, that block is skipped and the modal just shows the photo, title, description, and CTA.

### Contact form key

`web3formsKey` is the public access key for the [Web3Forms](https://web3forms.com) submission endpoint. It's designed to be exposed client-side — it identifies the destination inbox, not an account. Regenerate it at web3forms.com if the destination email changes.

### Empty-field handling

`businessNumber` and `gstNumber` are currently empty strings and simply don't render. `phone` and `email` fall back to greyed-out "coming soon" lines in the Footer if cleared, and the Contact section hides its contact block entirely if both are empty.

---

## 4. Components

### Navbar

**File:** `src/components/Navbar.jsx`

**Behaviour:**
- Fixed to the top of the screen at all times.
- At the top of the page — transparent background, white link text (blends into the hero image).
- After scrolling 40px — switches to a white background with dark text and a shadow, animated over 300ms.
- Shows the transparent-background MCGS logo rather than a text wordmark.

**Mobile:** Nav links collapse into a hamburger button that opens a white dropdown; the hamburger animates into an X. Tapping any link closes the menu.

**What it reads from config:** `shortName` (logo alt text), `navLinks`, `heroCtaHref`

---

### Hero

**File:** `src/components/Hero.jsx`

**What it renders:**
- Full-screen section (100vh minimum height).
- Background: the `heroImage` asset, cropped and centered.
- Two overlays stacked on top:
  1. A dark gradient (`black/70` → `black/40`) for readability.
  2. A brand-blue tint at 30% opacity, pulled from `primaryColor`.
- Centered content: headline → subheading → two buttons.

**Headline rendering:**
The tagline is split on ` & ` so any `&` renders in brand red. This is done in code — a tagline without `&` (like the current one) just renders as plain text.

**Buttons:**
1. **Request a Quote** (`heroCtaLabel`) — red, solid, links to `heroCtaHref` (`#contact`)
2. **Learn More** — ghost (white border), links to `#about`

**Scroll indicator:** A faint "SCROLL" label with an animated white line at the bottom.

**What it reads from config:** `heroImage`, `primaryColor`, `tagline`, `subtagline`, `heroCtaLabel`, `heroCtaHref`

---

### About

**File:** `src/components/About.jsx`

**Layout:** Centered "Who We Are" label and heading, then two equal columns on desktop, stacked on mobile.

**Left column:** Field photo (`aboutImage`), 420px tall on mobile and 520px on desktop, `object-cover` with the crop biased low (`object-[50%_72%]`) so the crew member and casings stay in frame instead of sky. A decorative blue square sits behind the bottom-right corner.

**Right column:** Company name as a subheading, then `aboutParagraphs` rendered as separate `<p>` tags, followed by three trust badges — **Safety** / **Canadian** / **Proven**. The badge labels are hardcoded in the component.

**What it reads from config:** `shortName`, `aboutImage`, `companyName`, `aboutParagraphs`

---

### Services

**File:** `src/components/Services.jsx`

**Layout:** Responsive grid — one column on mobile, two on tablet, three on desktop. Six cards.

**Each card is a button** (not a div) so it's keyboard-focusable, and contains:
- A 16:10 photo header that scales up slightly on hover
- A circular icon badge overlapping the bottom edge of the photo
- Service title and description
- A red "Learn more →" affordance whose arrow slides right on hover

**Hover effect:** The card lifts (`-translate-y-1`) and deepens its shadow.

**Service modal:** Clicking a card opens a centered dialog with the full photo, title, description, the `details` bullet list under "About This Method", and a Request a Quote button that closes the modal and jumps to `#contact`. Close via the X, clicking the backdrop, or pressing Escape. Background scrolling is locked while it's open (see [useOverlay](#5-shared-behaviour-the-overlay-hook)).

**What it reads from config:** `services` array (`id`, `icon`, `image`, `title`, `description`, `details`), plus `ctaHref` and `ctaLabel` for the modal button

---

### Industries

**File:** `src/components/Industries.jsx`

**Layout:** 2×2 grid on mobile, four across on desktop.

**Each tile:** A circular icon container with a blue tint, the icon (scales up on hover), and the industry label. Tiles lift on hover but are not clickable.

**What it reads from config:** `industries` array — each item needs `id`, `icon`, `label`

---

### Gallery

**File:** `src/components/Gallery.jsx`

**Layout:** 2 columns on mobile, 3 on desktop, 4:3 tiles.

**Progressive disclosure:** Only the first **9** photos show initially (`INITIAL_COUNT` at the top of the file). A "View All *N* Photos" button reveals the rest — the count comes from the actual number of files in the gallery folder.

**Lightbox:** Clicking a photo opens a full-screen viewer with previous/next arrows, a close button, and an "*n* / *total*" counter. Navigation wraps around at both ends. Arrow keys move between photos, Escape closes, and clicking the backdrop closes.

All images use `loading="lazy"`, so the extra photos cost nothing until they scroll into view.

**What it reads from config:** `gallery` array

---

### Clients

**File:** `src/components/Clients.jsx`

**Layout:** Centered flex-wrap row of logo tiles — full width on mobile, two-up on small screens, fixed 16rem tiles on desktop.

**Each tile:** The client logo (greyscale, turning full colour on hover) with the location underneath in small uppercase text. If `url` is set the tile renders as an `<a>` opening in a new tab with `rel="noopener noreferrer"`; without a `url` it's a plain `div`. If a client has no `logo`, the name renders as text instead.

**What it reads from config:** `clients` array — `id`, `name`, `location`, `logo`, `url`

---

### Contact

**File:** `src/components/Contact.jsx`

This replaced the old CTA section — it keeps the brand-blue block and adds a working form.

**Layout:** Two columns on desktop, stacked on mobile.

**Left:** "Get In Touch" label, the `ctaHeading`, a short intro line, and clickable `tel:` / `mailto:` links for `phone` and `email`.

**Right:** A white card holding the enquiry form — name, email, phone (optional), and message. It posts to `https://api.web3forms.com/submit` using `web3formsKey`, with the subject line built from `shortName`. A hidden `botcheck` honeypot field deters spam bots.

**States:** The submit button reads "Sending…" and is disabled while in flight. On success a green confirmation appears and the form resets; on failure a red message points the visitor at the email address directly.

**What it reads from config:** `ctaHeading`, `phone`, `email`, `web3formsKey`, `shortName`

---

### Footer

**File:** `src/components/Footer.jsx`

**Layout:** Three columns on desktop, stacked on mobile.

| Column | Contents |
|--------|---------|
| Brand | MCGS logo, full company name, footer tagline |
| Navigation | Repeat of the navbar links |
| Contact | Address, phone, email (each with an icon), business number, GST number |

**Smart placeholders:** Phone and email show as greyed-out italic "coming soon" if the config fields are empty. Business/GST numbers only appear if they have a value.

**Bottom bar:** Copyright year (auto-calculated via `new Date().getFullYear()`) and "Calgary, Alberta, Canada" — the city line is hardcoded in the component.

**What it reads from config:** `shortName`, `companyName`, `footerTagline`, `navLinks`, `address`, `phone`, `email`, `businessNumber`, `gstNumber`, `copyrightYear`

---

## 5. Shared behaviour: the overlay hook

**File:** `src/hooks/useOverlay.js`

Both full-screen overlays — the gallery lightbox and the service detail modal — share one hook:

```js
useOverlay(isOpen, { onClose, onPrev, onNext })
```

While `isOpen` is true it:
- Closes on **Escape**
- Calls `onPrev` / `onNext` on **←** / **→** (the service modal omits these)
- Sets `document.body.style.overflow = 'hidden'` so the page behind doesn't scroll, restoring the previous value on cleanup

Pass memoized callbacks (`useCallback`) so the key listener isn't rebound on every render. Both current callers do this.

---

## 6. Styling system

### Tailwind CSS v4

This project uses **Tailwind CSS v4**, which works differently from v3:

- No `tailwind.config.js` file.
- Configuration lives inside `src/index.css` in a `@theme {}` block.
- Brand tokens defined there automatically become Tailwind utility classes **and** CSS custom properties.

### Brand tokens

Defined in `src/index.css`:

```css
@theme {
  --color-brand-blue: #184b87;   →  text-brand-blue, bg-brand-blue, border-brand-blue
  --color-brand-red:  #e53935;   →  text-brand-red,  bg-brand-red,  border-brand-red
  --color-brand-bg:   #f8fafc;   →  bg-brand-bg
  --color-brand-text: #1f2937;   →  text-brand-text

  --font-heading: "Montserrat";  →  font-heading  (applied to h1–h6 globally)
  --font-body:    "Inter";       →  font-body     (applied to body globally)
}
```

Fonts are loaded from Google Fonts in `index.html`. `html { scroll-behavior: smooth }` is what makes the nav links glide rather than jump.

### Three ways colors are referenced

1. **Tailwind classes** — `bg-brand-red`, `text-brand-blue`. Preferred.
2. **CSS variables in inline styles** — `style={{ color: 'var(--color-brand-blue)' }}`. Used where a value has to be dynamic or where Tailwind can't reach (e.g. the industry tile's `rgba(24,75,135,0.08)` tint, which hardcodes the blue).
3. **Config values in inline styles** — `style={{ backgroundColor: company.primaryColor }}` in the Hero tint.

### Important: two places to update colors

When changing brand colors for a new client, update **both**:

1. `src/index.css` — the `@theme` block
2. `src/config/company.js` — `primaryColor` and `accentColor`

Also grep for the hardcoded `rgba(24,75,135,0.08)` in `Industries.jsx` — it won't follow the token.

---

## 7. Deployment pipeline

### How it works

```
You run:  git push

GitHub receives the push to main
  ↓
GitHub Actions triggers deploy.yml
  ↓
Workflow runs:
  1. Checkout code
  2. Setup Node 20 (with npm cache)
  3. npm ci  (clean install from package-lock.json)
  4. npm run build  (Vite compiles everything to /dist)
  5. Upload /dist as a Pages artifact
  6. Deploy artifact to GitHub Pages
  ↓
Site is live
```

The workflow can also be run manually via **workflow_dispatch** in the Actions tab. Concurrent runs are cancelled so only the latest push deploys.

**Total time from push to live:** typically 2–3 minutes.

### GitHub Pages settings (one-time setup)

In your repo on GitHub: **Settings → Pages → Source → GitHub Actions**

### Custom domain

The site is served at **`mcgsphilcan.ca`**.

The domain lives in `public/CNAME`, which Vite copies verbatim into `dist/` on every build. That file is what actually reaches the deployed site — **if you change the domain, change it there.**

> ⚠️ **There is also a `CNAME` at the repo root**, written by the GitHub Pages UI when a custom domain is set there. It is *not* part of the build output and does not affect the deployed site. Both files currently read `mcgsphilcan.ca`; keep them in sync, because a stale root file looks authoritative and isn't.

`mcgsphilcan.ca` is an apex (bare) domain, so DNS at the registrar needs **A records** pointing at GitHub's Pages IPs — `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` — or an ALIAS/ANAME record to `kfcemanes.github.io` if the registrar supports it. A plain CNAME record is not valid at the apex. Add a `www` CNAME to `kfcemanes.github.io` if you want `www.mcgsphilcan.ca` to work too. Then enter the domain in GitHub Pages settings and enable **Enforce HTTPS** once the certificate provisions.

### Local development

```
npm install
npm run dev       # Vite dev server with hot reload
npm run build     # production build into /dist
npm run preview   # serve the built /dist locally
```

---

## 8. How to reuse for a new client

The template is designed so that a new client deployment is mostly a configuration exercise.

### Steps

1. **Duplicate the repo** — create a new GitHub repo, copy the files, or use this as a template repo.
2. **Edit `src/config/company.js`** — name, tagline, contact info, services, industries, clients.
3. **Update `src/index.css`** — change `--color-brand-blue` and `--color-brand-red` to the client's brand colors, and check the hardcoded tint in `Industries.jsx`.
4. **Replace images in `src/assets/`** — `hero.jpg`, `about.jpg`, the logo files, `services/*.jpg`, client logos, and the `gallery/` folder. Keep the filenames or update the imports in `company.js` to match.
5. **Get a Web3Forms key** at web3forms.com for the client's inbox and set `web3formsKey`.
6. **Update `index.html`** — `<title>`, `<meta name="description">`, and the favicons in `public/`.
7. **Set `public/CNAME`** to the new domain, set up GitHub Pages, and point DNS.
8. **Push** — the site is live.

### What you do NOT need to change

- `vite.config.js`
- `deploy.yml`
- `main.jsx`
- `App.jsx` (unless you're adding or removing whole sections)
- `useOverlay.js`

### Copy that lives in components, not config

These strings are hardcoded in JSX and need editing per client:

| File | Hardcoded text |
|------|----------------|
| `About.jsx` | "Who We Are" label, trust badges (Safety / Canadian / Proven) |
| `Services.jsx` | "What We Do", "Our Services", the intro paragraph, "Learn more", "About This Method" |
| `Industries.jsx` | "Where We Work", "Industries We Serve", the intro paragraph |
| `Gallery.jsx` | "Our Work", "Project Gallery", the intro paragraph, `INITIAL_COUNT` |
| `Clients.jsx` | "Who We Work With", "Our Clients", the intro paragraph |
| `Contact.jsx` | "Get In Touch", the intro line, all form placeholders and status messages |
| `Footer.jsx` | "Navigation", "Contact" column headings, "Calgary, Alberta, Canada" |
| `Navbar.jsx`, `Hero.jsx` | "Request a Quote" (Navbar), "Learn More" and "Scroll" (Hero) |

### Client type adaptability

| Client type | Changes needed |
|-------------|----------------|
| Construction company | Config + section copy |
| Engineering firm | Config + section copy |
| Logistics company | Config + section copy |
| Law firm | Config + copy + softer color palette in CSS |
| Dental clinic | Config + copy + colors + swap industrial photos for interiors |
| Accounting firm | Config + copy + colors |

Component *logic* stays industry-agnostic — words like "manpower," "tunneling," and "Calgary" appear only in config and in the section copy listed above, never in conditionals or data handling.

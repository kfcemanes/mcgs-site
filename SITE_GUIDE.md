# MCGS Site — Structure & Feature Guide

This document explains how the website is built, what each piece does, and how to work with it.

---

## Table of Contents

1. [What the site looks like](#1-what-the-site-looks-like)
2. [Folder structure](#2-folder-structure)
3. [The config file](#3-the-config-file)
4. [Components](#4-components)
5. [Styling system](#5-styling-system)
6. [Deployment pipeline](#6-deployment-pipeline)
7. [How to reuse for a new client](#7-how-to-reuse-for-a-new-client)

---

## 1. What the site looks like

The site is a **single-page scrolling website**. There is no routing — everything lives on one page and users scroll through it or click nav links that jump to sections.

Sections from top to bottom:

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Navbar** | Sticky top navigation, links to each section |
| 2 | **Hero** | Full-screen opening with headline and CTA button |
| 3 | **About** | Company description with an industrial image |
| 4 | **Services** | Four cards describing what the company offers |
| 5 | **Industries** | Grid of industries the company serves |
| 6 | **CTA** | Bold call-to-action block with quote request button |
| 7 | **Footer** | Contact details, nav links, legal info |

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
│   └── favicon.svg             # Browser tab icon (blue "M")
│
├── src/
│   ├── config/
│   │   └── company.js          ← THE ONE FILE YOU EDIT PER CLIENT
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Industries.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
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

No component contains hardcoded client text. Every piece of content — company name, phone number, service descriptions, industry labels — comes from `company.js`.

---

## 3. The config file

**`src/config/company.js`** is the control panel for the entire site.

### What it contains

```
Identity      companyName, shortName, tagline, subtagline
              businessNumber, gstNumber

Contact       phone, email, address

Brand         primaryColor, accentColor

Navigation    navLinks  →  array of { label, href }

Hero          heroImage (URL), heroCtaLabel, heroCtaHref

About         aboutImage (URL), aboutParagraphs (array of strings)

Services      services  →  array of { id, icon, title, description }

Industries    industries  →  array of { id, icon, label }

CTA           ctaHeading, ctaLabel, ctaHref

Footer        footerTagline, copyrightYear
```

### Icons

Icons come from the `react-icons` library and are imported directly in `company.js`. The icon field in each service or industry object holds the **component itself**, not a string name. This means you import it at the top of the config file and assign it:

```js
import { FaHardHat } from 'react-icons/fa'

services: [
  { id: 'manpower', icon: FaHardHat, title: 'Manpower Supply', ... }
]
```

To change an icon, find a new one at **react-icons.github.io**, import it, and swap it in.

### Placeholder fields

`phone`, `email`, `businessNumber`, and `gstNumber` are currently empty strings (`''`). The components handle this gracefully:
- If phone/email are empty, the Footer shows "coming soon" in grey italic.
- The CTA email button falls back to `info@example.com` until a real email is set.

Fill these in whenever the client is ready.

---

## 4. Components

### Navbar

**File:** `src/components/Navbar.jsx`

**Behaviour:**
- Fixed to the top of the screen at all times (sticky).
- When the page loads at the top — transparent background, white text (so it blends into the hero image).
- As soon as the user scrolls 40px down — switches to a white background with dark text and a subtle shadow.
- This transition is animated (300ms).

**Mobile:**
- On small screens, nav links are hidden and replaced with a hamburger button (three lines).
- Tapping it opens a white dropdown with all links and the CTA button.
- The hamburger animates into an X when open.

**What it reads from config:** `shortName`, `navLinks`, `heroCtaHref`

---

### Hero

**File:** `src/components/Hero.jsx`

**What it renders:**
- Full-screen section (100vh minimum height).
- Background: the `heroImage` URL, cropped and centered.
- Two overlays stacked on top:
  1. A dark gradient (`black/70` to `black/40`) for readability.
  2. A semi-transparent brand-blue tint (30% opacity) for brand cohesion.
- Centered content: eyebrow label → headline → subheading → two buttons.

**Headline rendering:**  
The tagline `"Reliable Manpower & Drilling Solutions"` is split on ` & ` so the `&` renders in brand red. This is done in code — if you change the tagline in config to something without `&`, it just renders as plain text.

**Buttons:**
1. **Request a Quote** — red, solid, links to `#contact`
2. **Learn More** — ghost (white border), links to `#about`

**Scroll indicator:** A faint "SCROLL" label with an animated white line at the bottom of the section.

**What it reads from config:** `heroImage`, `subtagline`, `tagline`, `heroCtaLabel`, `heroCtaHref`, `shortName`

---

### About

**File:** `src/components/About.jsx`

**Layout:** Two equal columns side by side on desktop, stacked on mobile.

**Left column:** Industrial photo (`aboutImage`) at a fixed height (420px), object-fit cover so it never distorts. A small decorative blue square sits behind the bottom-right corner.

**Right column:** Company name as a subheading, then the `aboutParagraphs` array rendered as separate `<p>` tags. Below that, three "trust badges" — short bold labels with a descriptor line underneath (Safety / Alberta / Proven).

**What it reads from config:** `aboutImage`, `companyName`, `shortName`, `aboutParagraphs`

---

### Services

**File:** `src/components/Services.jsx`

**Layout:** Four cards in a row on desktop (2×2 on tablet, stacked on mobile).

**Each card contains:**
- Icon in a lightly tinted blue square
- Service title
- Service description
- A short red underline that grows wider on hover (hover animation)

**Hover effect:** The card lifts slightly (`-translate-y-1`) and deepens its shadow. The red underline animates from 8px to 16px wide.

**What it reads from config:** `services` array — each item needs `id`, `icon`, `title`, `description`

---

### Industries

**File:** `src/components/Industries.jsx`

**Layout:** 2×2 grid on mobile, four across on desktop.

**Each tile contains:**
- A circular icon container with a blue tint background
- The icon (scales up slightly on hover)
- Industry label

**What it reads from config:** `industries` array — each item needs `id`, `icon`, `label`

---

### CTA

**File:** `src/components/CTA.jsx`

**What it renders:**
- Full-width section with brand blue background.
- Centred text: eyebrow → large heading → subtext → red CTA button.
- If `phone` or `email` are set in config, they appear as clickable links below the button.

**The CTA button** links to `mailto:` using the email from config. When email is empty it uses `info@example.com` as a fallback so the button still works for testing.

**What it reads from config:** `ctaHeading`, `ctaLabel`, `ctaHref`, `email`, `phone`

---

### Footer

**File:** `src/components/Footer.jsx`

**Layout:** Three columns on desktop, stacked on mobile.

| Column | Contents |
|--------|---------|
| Brand | Short name, full company name, footer tagline |
| Navigation | Repeat of the navbar links |
| Contact | Address (always shown), phone, email, business number, GST number |

**Smart placeholders:** Phone and email show as greyed-out italic "coming soon" if the config fields are empty. Business/GST numbers only appear if they have a value.

**Bottom bar:** Copyright year (auto-calculated) and city/country.

**What it reads from config:** `shortName`, `companyName`, `footerTagline`, `navLinks`, `address`, `phone`, `email`, `businessNumber`, `gstNumber`, `copyrightYear`

---

## 5. Styling system

### Tailwind CSS v4

This project uses **Tailwind CSS v4**, which works differently from v3:

- No `tailwind.config.js` file.
- Configuration lives inside `src/index.css` in a `@theme {}` block.
- Brand tokens are defined there and automatically become Tailwind utility classes.

### Brand tokens

Defined in `src/index.css`:

```css
@theme {
  --color-brand-blue: #184b87;   →  text-brand-blue, bg-brand-blue, border-brand-blue
  --color-brand-red:  #e53935;   →  text-brand-red,  bg-brand-red,  border-brand-red
  --color-brand-bg:   #f8fafc;   →  bg-brand-bg
  --color-brand-text: #1f2937;   →  text-brand-text

  --font-heading: "Montserrat";  →  font-heading  (used on h1–h6)
  --font-body:    "Inter";       →  font-body
}
```

### Important: two places to update colors

When changing brand colors for a new client, update **both**:

1. `src/index.css` — `@theme` block (controls Tailwind utility classes)
2. `src/config/company.js` — `primaryColor` and `accentColor` (used in inline `style={}` props for dynamic values that Tailwind can't handle at build time)

---

## 6. Deployment pipeline

### How it works

```
You run:  git push

GitHub receives the push to main
  ↓
GitHub Actions triggers deploy.yml
  ↓
Workflow runs:
  1. Checkout code
  2. Install Node 20
  3. npm ci  (clean install from package-lock.json)
  4. npm run build  (Vite compiles everything to /dist)
  5. Upload /dist as a Pages artifact
  6. Deploy artifact to GitHub Pages
  ↓
Site is live at:  https://mcgs.kcemanes.com
```

**Total time from push to live:** typically 2–3 minutes.

### GitHub Pages settings (one-time setup)

In your repo on GitHub: **Settings → Pages → Source → GitHub Actions**

That's the only setting you need to change. Everything else is automated.

### Custom domain

Your domain `mcgs.kcemanes.com` needs a DNS record:

| Type | Name | Value |
|------|------|-------|
| CNAME | mcgs | `kfcemanes.github.io` |

Set this at your domain registrar. Then in GitHub Pages settings, enter `mcgs.kcemanes.com` as the custom domain and enable HTTPS.

---

## 7. How to reuse for a new client

The template is designed so that a new client deployment is a configuration exercise, not a development exercise.

### Steps

1. **Duplicate the repo** — create a new GitHub repo, copy the files, or use this as a template repo.
2. **Edit `src/config/company.js`** — fill in the new client's name, tagline, contact info, services, and industries.
3. **Update `src/index.css`** — change `--color-brand-blue` and `--color-brand-red` to the client's brand colors.
4. **Replace images** — update `heroImage` and `aboutImage` URLs in the config.
5. **Update `index.html`** — change the `<title>` and `<meta name="description">` to match the new client.
6. **Set up GitHub Pages** on the new repo and configure the custom domain.
7. **Push** — the site is live.

### What you do NOT need to change

- Any component file
- `vite.config.js`
- `deploy.yml`
- `main.jsx`
- `App.jsx`

### Client type adaptability

| Client type | Changes needed |
|-------------|----------------|
| Construction company | Config only |
| Engineering firm | Config only |
| Logistics company | Config only |
| Law firm | Config + softer color palette in CSS |
| Dental clinic | Config + colors + possibly swap industrial images for interior photos |
| Accounting firm | Config + colors |

The template avoids industry-specific vocabulary in component logic. Words like "manpower," "drilling," and "Alberta" live in config, not in JSX.

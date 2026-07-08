# MCGS Site — Reusable React Website Template

A professional, reusable corporate website template built with React 19, Vite, and Tailwind CSS v4.  
Currently deployed for **Marbel Contracting & General Services**.

**Live site:** https://mcgsphilcan.ca

---

## Tech Stack

| Tool | Version |
|------|---------|
| React | 19 |
| Vite | 6 |
| Tailwind CSS | 4 |
| React Icons | 5 |
| GitHub Pages | — |
| GitHub Actions | — |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/kfcemanes/mcgs-site.git
cd mcgs-site

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

Deployment is fully automated via GitHub Actions.

**Every push to `main` triggers a production deploy to GitHub Pages.**

```bash
git add .
git commit -m "your message"
git push
```

That's it. GitHub Actions builds the project and deploys it to GitHub Pages automatically.

### First-time GitHub Pages setup

1. Go to your repository → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the action handles everything else

### Custom domain (mcgs.kcemanes.com)

1. Go to **Settings** → **Pages** → **Custom domain**
2. Enter `mcgs.kcemanes.com`
3. Add a `CNAME` DNS record with your domain registrar:
   - **Type:** CNAME
   - **Name:** mcgs
   - **Value:** `kfcemanes.github.io`
4. Check **Enforce HTTPS** once DNS propagates

---

## Customizing for a New Client

**All client-specific content lives in one file:** `src/config/company.js`

Open that file and update:

- Company name, tagline, contact details
- Brand colors (primary blue, accent red)
- Navigation links
- Services (title, description, icon)
- Industries served
- Hero/About images
- CTA copy
- Web3Forms access key (contact form submissions)

No component logic needs to change between clients.

### Setting up the contact form

The `Contact` component submits directly to [Web3Forms](https://web3forms.com) — no backend required.

1. Get a free access key at https://web3forms.com
2. Set it in `src/config/company.js`:

```js
web3formsKey: 'your-access-key-here',
```

Submissions are emailed to the address registered with that key.

### Swapping brand colors

```js
// src/config/company.js
primaryColor: '#184B87',  // navbar, headings, accents
accentColor:  '#E53935',  // CTA buttons, highlights
```

These are also defined as CSS custom properties in `src/index.css` under `@theme`:

```css
@theme {
  --color-brand-blue: #184b87;
  --color-brand-red:  #e53935;
}
```

Both the config and the CSS need to match when changing brand colors.

### Replacing images

Images are referenced as URLs in `company.js`. Swap them for any hosted image URL or a relative path to a file in `/public`:

```js
heroImage:  '/images/hero.jpg',
aboutImage: '/images/about.jpg',
```

---

## Project Structure

```
mcgs-site/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions — auto-deploy on push to main
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Industries.jsx
│   │   ├── CTA.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── config/
│   │   └── company.js        ← edit this for each client
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## Reusing This Template for Future Clients

1. Fork or duplicate the repository
2. Update `src/config/company.js` with the new client's information
3. Update `src/index.css` `@theme` block to match the new brand colors
4. Replace placeholder images
5. Set up GitHub Pages on the new repo
6. Push — the site is live

This template is designed to support any corporate client:
construction, legal, dental, accounting, engineering, logistics, and more.

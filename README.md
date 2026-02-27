# Crossword Realty Website

South Florida boutique property management — one-page React website.

## Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** — custom design tokens (navy, gold, ivory, linen)
- **Framer Motion** — scroll-triggered reveals, page transitions
- **Lucide React** — icons
- **Google Fonts** — Playfair Display, Cormorant Garamond, Jost

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to GitHub Pages

1. Install the gh-pages helper:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Add `homepage` to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/crossword-realty"
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Structure

```
src/
  components/
    Nav.jsx          — Fixed navigation with mobile drawer
    Hero.jsx         — Full-height hero with Unsplash photo
    StatStrip.jsx    — Navy stats band (100k sqft, 10%, Direct)
    Services.jsx     — 5-card services grid
    PhotoBreak.jsx   — Full-width photo interlude
    WhyUs.jsx        — Featured + 4-card why-us grid
    About.jsx        — Team + origin story + mission quote
    Pricing.jsx      — Two pricing cards on navy bg
    Contact.jsx      — Split layout with animated form + success state
    Footer.jsx       — Simple branded footer
  App.jsx            — Root composition
  index.css          — Tailwind + base styles + grain texture
```

## Customization

- **Colors**: Edit `tailwind.config.js` under `theme.extend.colors`
- **Phone / Email**: Search for `5016801292` and `matthew@crosswordrealty.com`
- **Photos**: Unsplash URLs in `Hero.jsx` and `PhotoBreak.jsx`
- **Content**: Each component is self-contained and clearly labeled

## Contact

matthew@crosswordrealty.com · (501) 680-1292

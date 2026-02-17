# Astle Machado — Personal Portfolio

A modern, animated personal portfolio built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**. Features a glassmorphic UI, dark/light theme switching, interactive avatar with orbiting skill icons, an AI-powered chat widget, and smooth scroll-triggered animations throughout.

**Live:** _Coming soon on Vercel_

---

## Preview

| Dark Mode | Light Mode |
|-----------|------------|
| Starfield particles, frosted glass navbar & chat | Warm tones, adapted particles & glass effects |

---

## Features

- **Interactive Hero** — Avatar with parallax mouse tracking, orbiting skill icons with glow-on-hover, and a frosted glass AI chat widget with rotating placeholder questions
- **AI Chat Widget** — Client-side chat that answers questions about skills, experience, projects, and more using static JSON responses. Frosted glass UI with conversation history and click-outside-to-close
- **Dark / Light Theme** — Seamless toggle with `next-themes`, CSS custom properties, and a satisfying mechanical click sound effect (Web Audio API)
- **Scroll Animations** — Every section reveals with a pop-up fade effect (`y: 60→0`, `opacity: 0→1`, `scale: 0.9→1`) powered by Framer Motion's `useScroll` and `useTransform`
- **Glassmorphic Navbar** — Transparent sticky navbar with backdrop blur, animated signature logo (`< Astle Machado />`), and a standout Resume download button
- **Particle Background** — Theme-aware starfield using `@tsparticles/react` with subtle parallax
- **Custom Cursor** — Glowing cursor trail on desktop, auto-disabled on mobile
- **Responsive Design** — Mobile-first with adaptive layouts, oval skill orbits on small screens, and a collapsible mobile menu
- **Social Sidebar** — Fixed left-side social links (GitHub, LinkedIn, LeetCode, Notion)
- **Section Dot Navigation** — Right-side dot indicators for quick section jumping

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16 (App Router) |
| **Styling** | Tailwind CSS v4, CSS Custom Properties |
| **Animation** | Framer Motion, Web Audio API |
| **Particles** | @tsparticles/react + @tsparticles/slim |
| **Theming** | next-themes |
| **Icons** | Lucide React, SimpleIcons CDN, Devicon CDN |
| **Fonts** | Inter, Fira Code, Dancing Script (Google Fonts) |
| **Deployment** | Vercel-ready |

---

## Project Structure

```
astle-portfolio/
├── public/
│   ├── images/
│   │   ├── avatar-bg-removed.png    # Hero avatar
│   │   └── projects/                # Project screenshots
│   ├── Nobg.png                     # Navbar avatar
│   └── Astle_Machado_Sr_Software_Engg_5YOE.pdf
├── src/
│   ├── app/
│   │   ├── layout.js                # Root layout, fonts, theme provider
│   │   ├── page.js                  # Main page composing all sections
│   │   ├── providers.js             # ThemeProvider wrapper
│   │   └── globals.css              # CSS variables, theme tokens, base styles
│   ├── components/
│   │   ├── Navbar.jsx               # Glassmorphic sticky nav + resume button
│   │   ├── AnimatedLogo.jsx         # < Astle Machado /> signature logo
│   │   ├── Hero.jsx                 # Hero section + avatar + chat widget
│   │   ├── About.jsx                # About cards with scroll animations
│   │   ├── Experience.jsx           # Work experience timeline
│   │   ├── Skills.jsx               # Grouped skill chips
│   │   ├── Projects.jsx             # Featured project cards
│   │   ├── Achievements.jsx         # Awards & highlights
│   │   ├── Contact.jsx              # Contact form + social links
│   │   ├── Footer.jsx               # Minimal footer
│   │   ├── Starfield.jsx            # tsParticles background
│   │   ├── CustomCursor.jsx         # Desktop cursor effect
│   │   ├── SocialSidebar.jsx        # Fixed left social links
│   │   └── SectionDotNav.jsx        # Right-side section dots
│   ├── data/
│   │   └── resume.js                # All content: resume, projects, skills, chat responses
│   ├── hooks/
│   │   ├── useScrollSpy.js          # Active section tracker
│   │   ├── useMediaQuery.js         # Responsive breakpoint hook
│   │   └── useSound.js              # Theme toggle click sound
│   └── lib/
│       └── utils.js                 # Utility functions
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install & Run

```bash
# Clone the repo
git clone https://github.com/Astle171/personal-portfolio.git
cd personal-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Customization Guide

### Update Personal Info

All content is centralized in **`src/data/resume.js`**:

- `RESUME_DATA` — Name, role, summary, contact links, experience, education
- `PROJECTS` — Project cards (title, description, tech stack, links, screenshots)
- `SKILL_ICONS` — Skill icons with CDN URLs and colors
- `SKILL_CATEGORIES` — Grouped skill lists
- `ACHIEVEMENTS` — Award cards
- `CHAT_RESPONSES` — AI chat widget responses
- `CHAT_PLACEHOLDERS` — Rotating placeholder questions
- `NAV_LINKS` — Navigation items

### Update Images

| Image | Location | Purpose |
|-------|----------|---------|
| Hero avatar | `public/images/avatar-bg-removed.png` | Main hero image |
| Navbar avatar | `public/Nobg.png` | Top-left nav icon |
| Project screenshots | `public/images/projects/` | Project cards |
| Resume PDF | `public/Astle_Machado_Sr_Software_Engg_5YOE.pdf` | Download button |

### Theme Colors

Edit CSS custom properties in **`src/app/globals.css`** under `:root` (light) and `.dark` selectors:

```css
:root {
  --color-accent: #06b6d4;    /* Primary accent */
  --bg-primary: #f8fafc;      /* Page background */
  --text-primary: #0f172a;    /* Main text */
  /* ... */
}

.dark {
  --color-accent: #22d3ee;
  --bg-primary: #0a0a1a;
  --text-primary: #f1f5f9;
  /* ... */
}
```

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Framework preset is auto-detected as Next.js
4. Deploy — no additional config needed

### Other Platforms

The project exports as a standard Next.js app. Any platform supporting Next.js (Netlify, Railway, etc.) will work with `npm run build`.

---

## License

MIT — feel free to fork and adapt for your own portfolio.

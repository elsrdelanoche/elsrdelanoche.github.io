# Alfredo Bautista — Portfolio

> Dark Tech portfolio built with React + Vite + Tailwind CSS + Framer Motion.

Live: **https://elsrdelanoche.github.io/resume/**

---

## 🚀 Quick Start (Local / Codespaces)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173/resume/
```

---

## 📦 Build & Deploy

### Manual deploy (gh-pages)
```bash
npm run build
npm run deploy
```

### Automatic deploy (GitHub Actions)
Push to `main` → GitHub Actions builds and deploys automatically.

**Setup once:**
1. Go to your repo → Settings → Pages
2. Set Source to: **GitHub Actions**
3. Push any commit to `main`

---

## 🗂 Project Structure

```
portfolio/
├── public/
│   ├── images/          ← All project & profile images
│   ├── resume_en.pdf    ← English CV (replace with real file)
│   └── resume_es.pdf    ← Spanish CV (replace with real file)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← Navigation + lang toggle + CV download
│   │   ├── Hero.jsx         ← Landing section with particle bg
│   │   ├── ProjectCard.jsx  ← Projects grid + featured thesis
│   │   ├── SkillsGrid.jsx   ← Skills with tech icons
│   │   ├── Experience.jsx   ← Timeline (work / education / courses)
│   │   └── Footer.jsx       ← Contact + footer
│   ├── hooks/
│   │   └── useTypingEffect.js  ← Typing animation hook
│   ├── data.json           ← ALL content (bilingual EN/ES)
│   ├── App.jsx             ← Root: language state + layout
│   ├── main.jsx
│   └── index.css
├── .github/workflows/
│   └── deploy.yml          ← CI/CD to GitHub Pages
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## ✏️ How to Update Content

**Everything lives in `src/data.json`** — edit it to update any text, link, or project.

### Add a project
```json
{
  "id": 10,
  "image": "images/my-screenshot.png",
  "github": "https://github.com/...",
  "en": { "title": "My Project", "description": "...", "tags": ["Python"] },
  "es": { "title": "Mi Proyecto", "description": "...", "tags": ["Python"] }
}
```

### Replace CV files
Just drop `resume_en.pdf` and `resume_es.pdf` into the `public/` folder.

### Update profile image
Replace `public/images/perfil2.png` or change the path in `data.json`:
```json
"profileImage": "images/your-photo.jpg"
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#030712` (void-900) |
| Surface | `#0f172a` (surface-900) |
| Accent | `#0ea5e9` (electric-500) |
| Text Primary | `#f8fafc` |
| Text Muted | `#64748b` |
| Font Display | Syne |
| Font Body | Plus Jakarta Sans |
| Font Mono | JetBrains Mono |

---

## 📱 Responsive

Tested on:
- Samsung Galaxy S23 (360×780)
- iPhone 14 (390×844)
- iPad (768px)
- Desktop (1280px+)

---

## 🔧 Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** — custom dark tech palette
- **Framer Motion 11** — animations & transitions
- **Lucide React** — UI icons
- **JetBrains Mono** + **Syne** + **Plus Jakarta Sans** — Google Fonts

---

*Engineer with an artist's soul. Open source. No limits.*

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
Porfolio.1
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ pictures
│  │  ├─ 670951310_1307978511479293_20827009997221945_n.png
│  │  ├─ Bayer_Resume.pdf
│  │  ├─ ERR-EBUS_LOGO.png
│  │  ├─ FLOOD_SS.png
│  │  ├─ GENGAR_PNG.png
│  │  ├─ HOA_CDD_SS.png
│  │  ├─ MABELS_SS.png
│  │  ├─ MORPHRIFT_SS.png
│  │  ├─ POS_SS.png
│  │  ├─ SENTINELS_SS.png
│  │  └─ weweqwfqfqw.png
│  └─ vite.svg
├─ README.md
├─ REDESIGN_GUIDE.md
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ features
│  │  │  ├─ ChatbotButton.jsx
│  │  │  ├─ ChatbotModal.jsx
│  │  │  └─ ParticleEffect.jsx
│  │  ├─ layout
│  │  │  ├─ LoadingScreen.jsx
│  │  │  ├─ MobileMenu.jsx
│  │  │  ├─ Navbar.jsx
│  │  │  └─ ScrollIndicator.jsx
│  │  ├─ sections
│  │  │  ├─ About.jsx
│  │  │  ├─ Contact.jsx
│  │  │  ├─ Home.jsx
│  │  │  └─ Projects.jsx
│  │  └─ ui
│  │     ├─ FollowCursor.jsx
│  │     ├─ GlassmorphismCard.jsx
│  │     ├─ RevealOnScroll.jsx
│  │     └─ SpotlightCard.jsx
│  ├─ constants
│  │  └─ index.js
│  ├─ hooks
│  │  └─ useUISounds.js
│  ├─ index.css
│  └─ main.jsx
├─ tailwind.config.js
├─ vercel.json
└─ vite.config.js

```
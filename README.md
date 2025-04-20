#  Zenith Music (Early Dev Build)

> *“The neon runs deep, but the bugs run deeper.”*

Zenith Music is a cyberpunk-themed music dashboard app built with **React**, **Vite**, and **Tailwind CSS** — now in its glorious, slightly broken alpha state.

This repo contains the original development version before it was fully stabilized. Expect broken Tailwind configs, haunted PostCSS setups, and a lot of learning.

---

##  Tech Stack

- [x] React
- [x] Vite
- [x] Tailwind CSS 4.1+
- [x] PostCSS (post-hell version)
- [x] Windows Dev Environment (OneDrive sabotage included)

---

##  Known Issues in This Version

- Tailwind utilities like `bg-black` and `bg-cyber` not applying due to plugin issues
- `postcss.config.js` not properly wired at first
- `tailwind.config.js` may be in wrong directory
- OneDrive paths caused locked files and `EPERM` errors
- `npx tailwindcss` throwing “could not determine executable” errors
- Missing `vite.config.js` plugins like `@vitejs/plugin-react`

---

##  Dev Notes

This version was used to:

- Learn the differences between Tailwind v3 and v4+
- Understand PostCSS plugin behavior
- Document the debugging process as a living dev journal (see [Google Doc](https://docs.google.com/document/d/1QLTRPBoScy39LeF9bZNqQIbZhqIbEdw0i6gpzzk_efA/edit?usp=sharing))

---

##  To Get Running (if you dare)

```bash
git clone https://github.com/YOUR_USERNAME/zenith-music.git
cd zenith-music
npm install
npm run dev

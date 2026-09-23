# Anushka Dabhade — Portfolio

React + Vite + Tailwind CSS + Framer Motion. Built as a real project, not a template —
content lives in `src/data/`, so you can update it without touching any component code.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Before you deploy — things to fill in

1. **`src/data/profile.js`**
   - `linkedin` — add your LinkedIn URL (left blank on purpose; nothing was fabricated)
   - `leetcode` — add your LeetCode profile URL
2. **Screenshots** — every project, experience, and Beyond Code entry renders an
   intentional placeholder frame until you give it a real image. Each entry in
   `src/data/projects.js`, `src/data/experience.js`, and `src/data/recognition.js`
   (the `beyondCode` array) has an `image: ''` line right under its `id`/`title`.
   To add a photo:
   1. Put the image file in `public/screenshots/` (create the folder if it doesn't
      exist) — e.g. `public/screenshots/barclays.png`
   2. Open the data file, find that item's `image: ''` line, and change it to
      `image: '/screenshots/barclays.png'`
   3. Save. That's it — no component code to touch, the image appears automatically
      wherever that item is used (card, expanded view, etc).
3. **GitHub links** — `mini-c-compiler` in `src/data/projects.js` currently points at your
   GitHub profile (no dedicated repo link was available). Update `github` fields for any
   project once you have a specific repo URL. `reposensei`, `meridian`, `medicator`, and
   `expenseiq` are left with `github: null` — add real links if/when they're public repos.
4. **Resume** — `public/Anushka_Dabhade_Resume.pdf` is already wired up to the "Download
   Resume" buttons. Swap the file (keep the same name, or update `resumeFile` in
   `src/data/profile.js`) whenever you update your resume.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Vite via `vercel.json` — no config needed. Click Deploy.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Project structure

```
src/
  data/          # all content — edit here, not in components
  components/    # UI, grouped by section
  App.jsx        # section order
```

## Notes on content accuracy

Every project description, metric, and achievement is grounded in your resume and prior
project notes — nothing is invented. A few things worth double-checking before this goes
live:
- The ExpenseIQ section mentions the 100% validation-accuracy caveat directly, since you've
  flagged that as something to proactively address rather than lead with.
- The Barclays section includes the open issues you're still working through (handwritten
  OCR, root-cause mislabeling) rather than presenting it as finished — remove that block in
  `src/data/experience.js` once it's resolved, or leave it as an honest "in progress" note.

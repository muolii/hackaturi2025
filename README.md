# Hack@URI 2026 Website

Single-page React + Vite site for Hack@URI 2026, organized by feature folders.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [npm](https://www.npmjs.com/) (bundled with Node.js)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/muolii/hackaturi2025.git
   cd hackaturi2025
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Scripts

- Start dev server:
  ```bash
  npm run dev
  ```
- Build production bundle:
  ```bash
  npm run build
  ```
- Preview production build locally:
  ```bash
  npm run preview
  ```
- Run lint:
  ```bash
  npm run lint
  ```

## Current Project Structure

Code is organized by feature. Some features now follow a nested structure (`components/`, `pages/`, `data/`) similar to `schedule`.

```text
src/
├── app/
│   └── App.jsx
├── assets/
├── features/
│   ├── about/
│   │   ├── AboutSection.jsx
│   │   ├── AboutSection.css
│   │   └── index.js
│   ├── connect/
│   │   ├── ConnectSection.jsx
│   │   ├── ConnectSection.css
│   │   └── index.js
│   ├── faq/
│   │   ├── FAQSection.jsx
│   │   ├── FAQSection.css
│   │   └── index.js
│   ├── home/
│   │   ├── HomeSection.jsx
│   │   ├── HomeSection.css
│   │   ├── components/
│   │   │   ├── Countdown.jsx
│   │   │   └── Countdown.css
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx
│   │   │   └── LandingPage.css
│   │   └── index.js
│   ├── interest/
│   │   ├── InterestSection.jsx
│   │   ├── InterestSection.css
│   │   └── index.js
│   ├── layout/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   └── index.js
│   ├── registration/
│   │   ├── components/
│   │   │   ├── RegistrationPopup.jsx
│   │   │   ├── RegistrationPopup.css
│   │   │   ├── FloatingRegistration.jsx
│   │   │   └── FloatingRegistration.css
│   │   └── index.js
│   ├── schedule/
│   │   ├── ScheduleSection.jsx
│   │   ├── ScheduleSection.css
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/
│   │   └── index.js
│   ├── sponsors/
│   ├── team/
│   └── tracks/
├── shared/
│   └── styles/
│       └── shared.css
├── index.jsx
└── index.css
```

## Architecture Notes

- No React Router; app is a single scroll page.
- `App.jsx` listens for `#full-schedule` and renders the schedule overlay page.
- `App.jsx` also listens for `#archive-<eventId>` and renders the archive overlay page.
- Feature folders expose public entry points through `index.js` files.

## Common Yearly Updates

### Event title/date/home content
- `src/features/home/HomeSection.jsx`
  - `EVENT_DATE_DISPLAY`
  - `EVENT_TITLE`
  - `SHOW_PROJECT_GALLERY`, links, sponsor lockups
- `src/features/home/components/Countdown.jsx`
  - `EVENT_START`
  - `SUBMISSION_DUE`

### Landing (pre-launch) page
- `src/features/home/pages/LandingPage.jsx`
  - `LANDING_CONFIG`
  - `MLH_BADGE`
- `src/app/App.jsx`
  - `SITE_HIDDEN` and reveal behavior

### Schedule
- `src/features/schedule/data/scheduleData.js` (source of truth)
- `src/features/schedule/components/*`
- `src/features/schedule/pages/SchedulePage.jsx`

### FAQ
- `src/features/faq/FAQSection.jsx`
  - `FAQ_TABS`
  - `FAQ_DATA`

### Team
- `src/features/team/TeamSection.jsx`
  - `TEAM_TABS`
  - `TEAM_DATA`

### Sponsors/Donors
- `src/features/sponsors/SponsorsSection.jsx`
  - `SPONSOR_TIERS`
  - `DONORS`
- Sponsor image assets in `public/images/sponsors/`

### Registration callouts
- `src/features/registration/components/RegistrationPopup.jsx`
- `src/features/registration/components/FloatingRegistration.jsx`
  - `REGISTRATION_DEADLINE`
  - `REGISTRATION_URL`

### Navigation
- `src/features/layout/components/Header.jsx`
  - `NAV_ITEMS`

### Archive (past events / winners)

The archive is an overlay page opened via the URL hash `#archive-<eventId>` (for example `#archive-2026`). The header “Archive” dropdown is generated from `ARCHIVE_NAV_ITEMS`, so adding a new event automatically adds a new dropdown entry.

- **Page**: `src/features/archive/ArchivePage.jsx`
- **Event data (source of truth)**:
  - `src/features/archive/data/events/index.js`
  - `src/features/archive/data/events/<event>.js` (example: `hackaturi2026.js`)
- **Winners UI**: `src/features/archive/components/Winners.jsx`
- **Photo assets**: `public/images/past-events/<eventFolder>/...`

#### Adding a new archive event

1. Create a new event file in `src/features/archive/data/events/` (copy an existing one like `hackaturi2026.js`).
2. Add it to `ARCHIVE_EVENTS` in `src/features/archive/data/events/index.js` (order matters; the first item becomes `DEFAULT_ARCHIVE_EVENT_ID`).
3. Set a unique:
   - `id` (used in the hash: `#archive-<id>`)
   - `navLabel` (used in the header dropdown)
4. Photos / hero carousel:
   - Prefer using `photoDirectory: '/public/images/past-events/<eventFolder>'`
   - Put images under `public/images/past-events/<eventFolder>/` and the carousel will auto-load them (sorted by filename).
   - If you don’t want repo-hosted images, you can use `heroImages: [...]` as a fallback list of explicit image URLs.
5. Winners:
   - `winners.announced` toggles “Winners have not been announced…” vs the winners grid.
   - Each `winners.items[]` entry expects:
     - `projectName`, `teamMembers` (array), `description`, `tracks` (array), `image` (optional), `devpostUrl`

### Footer
- `src/features/layout/components/Footer.jsx`
  - `FOOTER_CONFIG.year`

## Adding a New Section

1. Create `src/features/<feature>/<FeatureName>Section.jsx`.
2. Create `src/features/<feature>/<FeatureName>Section.css`.
3. Export it from `src/features/<feature>/index.js`.
4. Render it in `src/app/App.jsx` with a section ID.
5. Add a matching nav item in `src/features/layout/components/Header.jsx`.

## Styling

- Shared/global styles: `src/shared/styles/shared.css`
- Feature styles: colocated with feature components
- Prefer scoped selectors in feature CSS to avoid cross-feature conflicts

## Deployment

Build and deploy the `dist/` output:

```bash
npm run build
```

Deploy `dist/` to your static host (Netlify, Vercel, GitHub Pages, S3, etc.).

## Troubleshooting

### Port already in use
```bash
npx kill-port 5173
npm run dev -- --port 3000
```

### Dependency issues
PowerShell:
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

macOS/Linux:
```bash
rm -rf node_modules package-lock.json
npm install
```

### HMR not updating
- Confirm you are running `npm run dev`
- Hard refresh browser (`Ctrl+Shift+R`)

## License

MIT
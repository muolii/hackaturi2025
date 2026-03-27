# Hack@URI 2026 Website

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/muolii/hackaturi2025.git
   cd hackaturi2025
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Development

### Start Development Server
```bash
npm run dev
```

This will start the development server at `http://localhost:5173` (or another available port).

**Features during development:**
- Hot Module Replacement (HMR) for instant updates
- Fast refresh for React components
- Live error reporting in the browser

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

This serves the production build locally for testing before deployment.

---

## Project Structure

Code is organized **by feature** (each folder owns its UI, styles, and local data).

```
src/
├── app/
│   └── App.jsx                   # Root component — layout, hash routing, site visibility
├── features/
│   ├── about/                    # About section + About.css
│   ├── connect/
│   ├── faq/
│   ├── home/                     # Home, Countdown, LandingPage (+ CSS)
│   ├── interest/
│   ├── layout/                   # Header, Footer
│   ├── registration/           # RegistrationPopup, FloatingRegistration
│   ├── schedule/                 # Schedule section, SchedulePage overlay, calendar, UpNext,
│   │                             # WorkshopModal, ScheduleData.js
│   ├── sponsors/
│   ├── team/
│   ├── tracks/
│   └── winners/
├── shared/
│   └── styles/
│       └── shared.css            # Global shared styles
├── assets/                       # SVGs and images bundled by Vite
├── index.jsx                     # Application entry point
└── index.css                     # Global reset / body
```

---

## Common Updates for Next Year

Most year-to-year changes are isolated to a small number of files. Here's where to look:

### Event details (name, dates, countdown target)
- **`src/features/home/Countdown.jsx`** — update `EVENT_ISO` to the new event start datetime
- **`src/features/home/Home.jsx`** — update `EVENT_DATE_DISPLAY` and `EVENT_TITLE`
- **`src/features/layout/Footer.jsx`** — update the copyright `year` in `FOOTER_CONFIG`

### Schedule
- **`src/features/schedule/ScheduleData.js`** — the single source of truth for all events. Edit the `SCHEDULE` object here. Both the `UpNext` card and the full `SchedulePage` read from this file automatically.

### Team members
- **`src/features/team/Team.jsx`** — add/remove members from `TEAM_DATA`, add/remove departments from `TEAM_TABS`

### Sponsors
- **`src/features/sponsors/Sponsors.jsx`** — add/remove logos from `SPONSOR_TIERS`, update `DONORS`
- Drop new logo images into `public/images/sponsors/`

### FAQ
- **`src/features/faq/FAQ.jsx`** — edit questions in `FAQ_DATA`, add/remove tabs in `FAQ_TABS`

### Registration deadline & links
- **`src/features/registration/RegistrationPopup.jsx`** — update `REGISTRATION_DEADLINE` and `REGISTRATION_URL`
- **`src/features/registration/FloatingRegistration.jsx`** — same fields: `REGISTRATION_DEADLINE` and `REGISTRATION_URL`

### Hackathon tracks
- **`src/features/tracks/Tracks.jsx`** — add/remove entries from the `TRACKS` array

### Navigation links
- **`src/features/layout/Header.jsx`** — edit the `NAV_ITEMS` array. Add `isSchedulePage: true` to any item that should open the schedule page view instead of scrolling.

### Pre-launch teaser page
- **`src/app/App.jsx`** — set `SITE_HIDDEN = true` to show `LandingPage` instead of the full site. Access code for early preview: `"hackaturi-secret"`.
- **`src/features/home/LandingPage.jsx`** — update `LANDING_CONFIG` with new event info and social links.

---

## View System (No Router Required)

The site has no React Router dependency. The main shell is a single-page scroll. When `window.location.hash` is `#full-schedule`, `App.jsx` mounts the full-screen `SchedulePage` overlay on top.

To add another dedicated page in the future:
1. Create `src/features/<name>/MyPage.jsx` with any props you need (e.g. `onBack`)
2. Import it in `src/app/App.jsx`
3. Add state or hash routing and a render branch in `App.jsx`
4. Trigger navigation from a button or nav link

---

## Adding New Sections

1. Create `src/features/<name>/MySection.jsx` and `MySection.css`
2. Import and add `<section id="my-section"><MySection /></section>` in `src/app/App.jsx`
3. Add a matching entry to `NAV_ITEMS` in `src/features/layout/Header.jsx`

---

## Styling

- **Global/shared styles**: `src/shared/styles/shared.css`
- **Feature styles**: each feature keeps its `.css` files next to its `.jsx` files under `src/features/<feature>/`

---

## Deployment

### Static Hosting (Netlify, Vercel, GitHub Pages)
1. Build the project: `npm run build`
2. Upload the `dist/` folder to your hosting provider

### Traditional Web Server
1. Build the project: `npm run build`
2. Copy the `dist/` folder contents to your web server's document root

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Troubleshooting

**Port already in use:**
```bash
npx kill-port 5173
# or use a different port
npm run dev -- --port 3000
```

**Build errors / dependency issues:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**HMR not working:**
- Make sure you're running `npm run dev`, not `npm start`
- Try a hard refresh in the browser

---

## License

This project is licensed under the MIT License
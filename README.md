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

```
src/
├── components/                   # Reusable UI components
│   ├── Countdown.jsx             # Live countdown timer to event start
│   ├── Countdown.css
│   ├── FloatingRegistration.jsx  # Dismissible floating registration banner
│   ├── FloatingRegistration.css
│   ├── Footer.jsx                # Site footer
│   ├── Footer.css
│   ├── Header.jsx                # Navigation header (desktop + mobile)
│   ├── Header.css
│   ├── LandingPage.jsx           # Pre-launch teaser page (used when SITE_HIDDEN=true)
│   ├── LandingPage.css
│   ├── RegistrationPopup.jsx     # One-time registration modal (session-based)
│   ├── RegistrationPopup.css
│   ├── UpNext.jsx                # "Happening Next" card — shared by Home and SchedulePage
│   └── UpNext.css
│   └── scheduleData.js           # All schedule events, colors, and helper functions
├── pages/                        # Page-level components
│   ├── About.jsx                 # About the event
│   ├── About.css
│   ├── Connect.jsx               # Social media links
│   ├── Connect.css
│   ├── FAQ.jsx                   # Accordion FAQ with tabbed categories
│   ├── FAQ.css
│   ├── Home.jsx                  # Hero section with countdown and UpNext card
│   ├── Home.css
│   ├── Interest.jsx              # Sponsor/volunteer/mentor/judge sign-up links
│   ├── Interest.css
│   ├── SchedulePage.jsx          # Full event schedule (dedicated page view)
│   ├── SchedulePage.css
│   ├── Sponsors.jsx              # Sponsor logos by tier
│   ├── Sponsors.css
│   ├── Team.jsx                  # Flippable team member cards by department
│   ├── Team.css
│   ├── Tracks.jsx                # Hackathon tracks/categories
│   └── Tracks.css
├── assets/                       # SVGs and images bundled by Vite
├── styles/
│   └── shared.css                # Global shared styles
├── App.jsx                       # Root component — manages views and layout
└── index.jsx                     # Application entry point
```

---

## Common Updates for Next Year

Most year-to-year changes are isolated to a small number of files. Here's where to look:

### Event details (name, dates, countdown target)
- **`src/components/Countdown.jsx`** — update `EVENT_ISO` to the new event start datetime
- **`src/pages/Home.jsx`** — update `EVENT_DATE_DISPLAY` and `EVENT_TITLE`
- **`src/components/Footer.jsx`** — update the copyright `year` in `FOOTER_CONFIG`

### Schedule
- **`src/data/scheduleData.js`** — the single source of truth for all events. Edit the `SCHEDULE` object here. Both the `UpNext` card and the full `SchedulePage` read from this file automatically.

### Team members
- **`src/pages/Team.jsx`** — add/remove members from `TEAM_DATA`, add/remove departments from `TEAM_TABS`

### Sponsors
- **`src/pages/Sponsors.jsx`** — add/remove logos from `SPONSOR_TIERS`, update `DONORS`
- Drop new logo images into `public/images/sponsors/`

### FAQ
- **`src/pages/FAQ.jsx`** — edit questions in `FAQ_DATA`, add/remove tabs in `FAQ_TABS`

### Registration deadline & links
- **`src/components/RegistrationPopup.jsx`** — update `REGISTRATION_DEADLINE` and `REGISTRATION_URL`
- **`src/components/FloatingRegistration.jsx`** — same fields: `REGISTRATION_DEADLINE` and `REGISTRATION_URL`

### Hackathon tracks
- **`src/pages/Tracks.jsx`** — add/remove entries from the `TRACKS` array

### Navigation links
- **`src/components/Header.jsx`** — edit the `NAV_ITEMS` array. Add `isSchedulePage: true` to any item that should open the schedule page view instead of scrolling.

### Pre-launch teaser page
- **`src/App.jsx`** — set `SITE_HIDDEN = true` to show `LandingPage` instead of the full site. Access code for early preview: `"hackaturi-secret"`.
- **`src/components/LandingPage.jsx`** — update `LANDING_CONFIG` with new event info and social links.

---

## View System (No Router Required)

The site uses a lightweight view-switching system in `App.jsx` instead of a router library. The `currentView` state controls what's rendered:

| Value | What's shown |
|---|---|
| `'main'` | Normal single-page scroll layout |
| `'schedule'` | Dedicated full-schedule page |

To add another dedicated page in the future:
1. Create `src/pages/MyPage.jsx` with an `onBack` prop
2. Import it in `App.jsx`
3. Add a new view string (e.g. `'mypage'`) and render branch to `App.jsx`
4. Trigger `setCurrentView('mypage')` from a button or nav link

---

## Adding New Sections

1. Create `src/pages/MySection.jsx` and `MySection.css`
2. Import and add `<section id="my-section"><MySection /></section>` in `App.jsx`
3. Add a matching entry to `NAV_ITEMS` in `src/components/Header.jsx`

---

## Styling

- **Global/shared styles**: `src/styles/shared.css`
- **Component styles**: each component has a paired `.css` file in the same folder
- **Page styles**: each page has a paired `.css` file in `src/pages/`

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
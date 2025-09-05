# Hack@URI 2025 Website

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

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Countdown.css   # Countdown module styles
│   ├── Countdown.jsx   # Countdown module
│   ├── Footer.jsx      # Footer
│   └── Header.jsx      # Navigation header
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About page
│   ├── Sponsors.jsx    # Sponsors page
│   ├── Schedule.jsx    # Event schedule
│   ├── Team.jsx        # Team members
│   ├── Tracks.jsx      # Hackathon Tracks
│   └── FAQ.jsx         # Frequently asked questions
├── assets/             # Images and static files
│   ├── logo.png        # Website logo
│   ├── ram.png         # URI Ram mascot
│   ├── ram2.png        # Additional ram images
│   └── ram3.png        # Additional ram images
├── App.jsx             # Main application component
├── App.css             # Application styles
├── index.jsx           # Application entry point
└── index.css           # Global styles
```

## Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the page to the navigation in `src/components/Header.jsx`
3. Update the routing logic in `src/App.jsx`

### Styling
- **Global styles**: Edit `src/index.css`
- **Component styles**: Edit `src/App.css`
- **Page-specific styles**: Add CSS classes to individual page components

### Content Updates
- **Text content**: Edit the JSX in each page component
- **Images**: Replace files in `src/assets/` and update import paths
- **Navigation**: Modify the `navigationItems` array in `Header.jsx`

## Deployment

### Static Hosting (Netlify, Vercel, GitHub Pages)
1. Build the project: `npm run build`
2. Upload the `dist/` folder contents to your hosting provider

### Traditional Web Server
1. Build the project: `npm run build`
2. Copy the `dist/` folder contents to your web server's document root

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process using port 5173
npx kill-port 5173
# Or specify a different port
npm run dev -- --port 3000
```

**Build errors:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**HMR not working:**
- Ensure you're running `npm run dev` (not `npm start`)
- Check that your browser supports HMR
- Try refreshing the page

## License

This project is licensed under the MIT License 
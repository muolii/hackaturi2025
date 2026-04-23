// src/index.jsx
// Application entrypoint: mounts App inside React StrictMode.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'

// Render the root application shell.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
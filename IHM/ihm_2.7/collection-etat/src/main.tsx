import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CssBaseline from "@mui/material/CssBaseline";

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<CssBaseline /> {/* Global CSS reset from Material-UI */}

    <App />
  </StrictMode>,
)

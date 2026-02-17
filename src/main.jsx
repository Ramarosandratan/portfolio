import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeLanguageProvider } from './context/ThemeLanguageContext.jsx'
import './index.css'
import App from './App.jsx'

// Set favicon to logo.svg
const favicon = document.querySelector('link[rel="icon"]');
if (favicon) {
  favicon.href = '/logo.svg';
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeLanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </ThemeLanguageProvider>
  </StrictMode>,
)

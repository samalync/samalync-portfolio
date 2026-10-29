import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Old HashRouter links (e.g. /#/team) keep working: rewrite them to clean paths before routing.
if (window.location.hash.startsWith('#/')) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  window.history.replaceState(null, '', `${base}${window.location.hash.slice(1)}`)
}

createRoot(document.getElementById("root")!).render(<App />);

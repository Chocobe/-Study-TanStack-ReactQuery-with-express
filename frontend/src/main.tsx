import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './lib/tailwindcss/tailwind.global.css';

createRoot(document.getElementById('root')!).render(
  <App />
)

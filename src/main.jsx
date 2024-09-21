import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { MeliApp } from './MeliApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MeliApp />
  </StrictMode>,
)

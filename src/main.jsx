import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { MeliApp } from './MeliApp'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MeliApp />
    </BrowserRouter>
  </StrictMode>,
)

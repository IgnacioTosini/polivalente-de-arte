import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PolivalenteDeArteApp } from './PolivalenteDeArteApp'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <PolivalenteDeArteApp />
    </StrictMode>
  </BrowserRouter>,
)

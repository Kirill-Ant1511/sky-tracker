import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './Home.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={<Home />}
        />

        <Route 
          path="/:flightNumber"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

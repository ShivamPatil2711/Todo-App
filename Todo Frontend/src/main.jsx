import { StrictMode } from 'react'// react is building component
import { createRoot } from 'react-dom/client'// reactDOM is converting (rendering) component
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


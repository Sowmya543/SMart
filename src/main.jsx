import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './contextAPI/CartContext.jsx'
import { ThemeProvider } from './contextAPI/ThemeContext.jsx';
import { PhoneProvider } from "./PhonePopup/PhoneContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <ThemeProvider>
        
        <PhoneProvider>
          <CartProvider>
           <BrowserRouter>
          <App />
          </BrowserRouter>
          </CartProvider>
        </PhoneProvider>
      </ThemeProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ShareContext from './contextAPI/ShareContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='1094714600149-o2jnvmjki6r3op5or0eo6ptg03uhlhlr.apps.googleusercontent.com'>
        <ShareContext>
          <App />
        </ShareContext>
      </GoogleOAuthProvider>
    </BrowserRouter>

  </StrictMode>,
)

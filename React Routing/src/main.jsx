import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './Hooks/ThemeContext.jsx'
import { AuthProvider } from './Hooks/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      {/* <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider> */}
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </StrictMode>,
)

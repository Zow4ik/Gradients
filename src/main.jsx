import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.js'
import {GeneratorProvider} from '@/context/GeneratorContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneratorProvider>
      <App />
    </GeneratorProvider>
  </StrictMode>,
)

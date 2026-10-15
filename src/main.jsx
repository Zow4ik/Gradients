import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.js'
import {GeneratorProvider} from '@/context/GeneratorContext.jsx'
import {PaletteProvider} from '@/context/PaletteContext.jsx'
import {SettingsGradientProvider} from '@/context/SettingsGradientContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneratorProvider>
      <PaletteProvider>
        <SettingsGradientProvider>
          <App />
        </SettingsGradientProvider>
      </PaletteProvider>
    </GeneratorProvider>
  </StrictMode>,
)

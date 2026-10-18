import { GeneratorProvider } from '@/context/GeneratorContext.jsx'
import { PaletteProvider } from '@/context/PaletteContext.jsx'
import { SettingsGradientProvider } from '@/context/SettingsGradientContext.jsx'

const Providers = (props) => {
  const {
    children
  } = props

  return (
    <GeneratorProvider>
      <PaletteProvider>
        <SettingsGradientProvider>
          {children}
        </SettingsGradientProvider>
      </PaletteProvider>
    </GeneratorProvider>  )
}

export default Providers
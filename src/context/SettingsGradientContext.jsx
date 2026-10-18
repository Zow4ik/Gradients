import { createContext } from 'react'
import { useSettingsGradient } from '@/hooks/useSettingsGradient.js'

export const SettingsGradientContext = createContext([])

export const SettingsGradientProvider = (props) => {
  const {
    children
  } = props

  const {
    settings,
    changeModeGradient,
    changeShape,
    changeAngle,
  } = useSettingsGradient()

  return (
    <SettingsGradientContext.Provider
      value={{
        ...settings,
        changeModeGradient,
        changeShape,
        changeAngle,
      }}
    >
      {children}
    </SettingsGradientContext.Provider>
  )
}
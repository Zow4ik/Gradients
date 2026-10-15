import {createContext} from 'react'

export const SettingsGradientContext = createContext([])

export const SettingsGradientProvider = (props) => {
  const {
    children
  } = props

  const testInfo = {
    gradientMode: 'Linear',
    angle: 32,
    shape: 'circle',
    blend: 'normal',
    space: 'oklch',
    grain: 'off',
    countStops: 4,
  }

  return (
    <SettingsGradientContext.Provider
      value={testInfo}
    >
      {children}
    </SettingsGradientContext.Provider>
  )
}
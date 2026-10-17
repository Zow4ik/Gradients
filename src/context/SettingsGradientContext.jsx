import {createContext, useState} from 'react'

export const SettingsGradientContext = createContext([])

export const SettingsGradientProvider = (props) => {
  const {
    children
  } = props

  const [settings, setSettings] = useState({
    gradientMode: 'Linear',
    angle: 180,
    shape: 'circle',
    blend: 'normal',
    space: 'oklch',
    grain: 'off',
    countStops: 4,
  })

  function changeModeGradient(newMode) {
    setSettings((prev) => ({
      ...prev,
      gradientMode: newMode,
    }))
  }

  function changeShape(newShape) {
    setSettings((prev) => ({
      ...prev,
      shape: newShape,
    }))
  }

  function changeAngle(newAngle) {
    setSettings((prev) => ({
      ...prev,
      angle: newAngle,
    }))
  }

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
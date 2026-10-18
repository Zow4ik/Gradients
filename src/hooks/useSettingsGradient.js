import { useState } from 'react'

const useSettingsGradient = () => {
  const [settings, setSettings] = useState({
    gradientMode: 'Linear',
    angle: 180,
    shape: 'circle',
  })

  function changeModeGradient(newMode) {
    setSettings((prev) => ({ ...prev, gradientMode: newMode, }))
  }

  function changeShape(newShape) {
    setSettings((prev) => ({ ...prev, shape: newShape, }))
  }

  function changeAngle(newAngle) {
    setSettings((prev) => ({ ...prev, angle: newAngle, }))
  }

  return {
    settings,
    changeModeGradient,
    changeShape,
    changeAngle,
  }
}

export { useSettingsGradient }
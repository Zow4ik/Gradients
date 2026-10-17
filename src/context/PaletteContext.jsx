import { createContext, useState, useEffect, useContext } from 'react'
import { getPaletteSync } from 'colorthief'
import { GeneratorContext } from './GeneratorContext'

export const PaletteContext = createContext([])

const createStopsFromColors = (colorArray) => {
  return colorArray.map((color, index) => ({
    id: `stop-${index}-${Date.now()}`,
    color,
    position: colorArray.length > 1
      ? Math.round((index / (colorArray.length - 1)) * 100)
      : 0
  }))
}

export const PaletteProvider = ({ children }) => {
  const { imageUrl } = useContext(GeneratorContext)

  const defaultColors = ['#FF6B6B', '#FFA07A', '#6E40C9', '#1F6FEB']

  const [originalColors, setOriginalColors] = useState(defaultColors)
  const [colors, setColors] = useState(defaultColors)
  const [stops, setStops] = useState(createStopsFromColors(defaultColors))

  useEffect(() => {
    if (!imageUrl) return

    const img = new Image()
    img.src = imageUrl

    img.onload = () => {
      try {
        const palette = getPaletteSync(img, { colorCount: 4 })
        const hexColors = palette.map(color => color.hex())

        setOriginalColors(hexColors)
        setColors(hexColors)
      } catch (error) {
        console.error('Ошибка при извлечении цветов:', error)
      }
    }
  }, [imageUrl])

  useEffect(() => {
    setStops(createStopsFromColors(colors))
  }, [colors])

  const addStop = () => {
    if (stops.length >= 4) return

    const newColor = originalColors[stops.length] || '#000000'

    const newPosition = 100

    const allStops = [...stops, { id: `new-${Date.now()}`, color: newColor, position: newPosition }]

    const redistributed = allStops.map((stop, index) => ({
      ...stop,
      position: Math.round((index / (allStops.length - 1)) * 100)
    }))

    setStops(redistributed)
  }

  const removeStop = () => {
    if (stops.length <= 2) return

    const newStops = stops.slice(0, -1)

    const redistributed = newStops.map((stop, index) => ({
      ...stop,
      position: Math.round((index / (newStops.length - 1)) * 100)
    }))

    setStops(redistributed)
  }

  const reverseStops = () => {
    const reversed = [...stops].reverse().map((stop, index) => ({
      ...stop,
      position: Math.round((index / (stops.length - 1)) * 100)
    }))
    setStops(reversed)
  }

  const resetStops = () => {
    setStops(createStopsFromColors(originalColors))
  }

  return (
    <PaletteContext.Provider value={{
      colors,
      stops,
      setStops,
      addStop,
      removeStop,
      reverseStops,
      resetStops
    }}>
      {children}
    </PaletteContext.Provider>
  )
}
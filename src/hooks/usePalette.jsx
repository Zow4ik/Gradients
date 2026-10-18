import { useContext, useEffect, useState } from 'react'
import { GeneratorContext } from '@/context/GeneratorContext.jsx'
import { getPaletteSync } from 'colorthief'

const usePalette = () => {
  const createStopsFromColors = (colorArray) => {
    return colorArray.map((color, index) => ({
      id: `stop-${index}-${Date.now()}`,
      color,
      position: colorArray.length > 1
        ? Math.round((index / (colorArray.length - 1)) * 100)
        : 0
    }))
  }

  const { imageUrl, updatePerformance } = useContext(GeneratorContext)

  const defaultColors = ['#FF6B6B', '#FFA07A', '#6E40C9', '#1F6FEB']

  const [colors, setColors] = useState(defaultColors)
  const [originalColors, setOriginalColors] = useState(defaultColors)
  const [stops, setStops] = useState(createStopsFromColors(defaultColors))

  useEffect(() => {
    if (!imageUrl) return

    const img = new Image()
    img.src = imageUrl

    img.onload = () => {
      try {
        const startPerformance = performance.now()

        const palette = getPaletteSync(img, { colorCount: 4 })
        let hexColors = palette.map(color => color.hex())
        hexColors = [...new Set(hexColors)]

        const endPerformance = performance.now()
        const durationPerformance = (endPerformance - startPerformance).toFixed()
        updatePerformance(durationPerformance)

        setOriginalColors(hexColors)
        setColors(hexColors)
        setStops(createStopsFromColors(hexColors))
      } catch (error) {
        console.error('Ошибка при извлечении цветов:', error)
      }
    }
  }, [imageUrl])

  const addStop = () => {
    if (stops.length >= 4) return
    const newColor = originalColors[stops.length] || '#000000'
    const allStops = [...stops, { id: `new-${Date.now()}`, color: newColor, position: 100 }]
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
    if (stops.length <= 1) return;
    const reversed = [...stops].reverse().map((stop, index) => ({
      ...stop,
      position: Math.round((index / (stops.length - 1)) * 100)
    }))
    setStops(reversed)
  }

  const resetStops = () => {
    setStops(createStopsFromColors(originalColors))
  }

  return {
    stops,
    setStops,
    addStop,
    removeStop,
    reverseStops,
    resetStops,
    colors,
  }
}

export { usePalette }
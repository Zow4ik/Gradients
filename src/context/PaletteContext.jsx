import { createContext, useState, useEffect, useContext } from 'react'
import { getPaletteSync } from 'colorthief'
import { GeneratorContext } from './GeneratorContext' // Убедись, что путь правильный

export const PaletteContext = createContext([])

export const PaletteProvider = ({ children }) => {
  const { imageUrl } = useContext(GeneratorContext)
  const [colors, setColors] = useState(['#FF6B6B', '#FFA07A', '#6E40C9', '#1F6FEB'])
  const [dominantColors, setDominantColors] = useState(4)

  useEffect(() => {
    if (!imageUrl) return

    const img = new Image()
    img.src = imageUrl

    img.onload = () => {
      try {
        const palette = getPaletteSync(img, { colorCount: 4 })
        const hexColors = palette.map(color => color.hex())

        setColors(hexColors)
        setDominantColors(hexColors.length)
      } catch (error) {
        console.error('Ошибка при извлечении цветов:', error)
      }
    }
  }, [imageUrl])

  return (
    <PaletteContext.Provider value={{ colors, dominantColors }}>
      {children}
    </PaletteContext.Provider>
  )
}
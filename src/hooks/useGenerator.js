import { useState } from 'react'
import { squish } from 'picsquish'

const useGenerator = () => {
  const [info, setInfo] = useState({
    file: null,
    nameFile: 'sunset-over-california.jpg — Palette Extracted',
    imageUrl: null,
    performance: '14',
  })

  const updatePerformance = (ms) => {
    setInfo((prev) => ({ ...prev, performance: ms }))
  }

  async function updateImage(file) {
    try {
      const result = await squish(file, 700)
      const blob = await result.toBlob()
      const url = URL.createObjectURL(blob)

      setInfo((prev) => {
        if (prev.imageUrl) {
          URL.revokeObjectURL(prev.imageUrl)
        }

        return {
          ...prev,
          file: blob,
          imageUrl: url,
          nameFile: file.name,
        }
      })

    } catch (error) {
      console.error('Ошибка сжатия:', error)
    }
  }

  return {
    info,
    updateImage,
    updatePerformance,
  }
}

export { useGenerator }
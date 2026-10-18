import { createContext } from 'react'
import {usePalette} from '@/hooks/usePalette.jsx'

export const PaletteContext = createContext([])

export const PaletteProvider = (props) => {
  const {
    children
  } = props

  const {
    stops,
    setStops,
    addStop,
    removeStop,
    reverseStops,
    resetStops,
    colors,
  } = usePalette()

  return (
    <PaletteContext.Provider value={{
      stops,
      setStops,
      addStop,
      removeStop,
      reverseStops,
      resetStops,
      colors,
    }}>
      {children}
    </PaletteContext.Provider>
  )
}
import {createContext} from 'react'

export const PaletteContext = createContext([])

export const PaletteProvider = (props) => {
  const {
    children,
  } = props

  const testInfo = [
    [255, 255, 0], [222, 111, 0], [0, 111, 222], [222, 111, 222],
  ]

  return (
    <PaletteContext.Provider
      value={testInfo}
    >
      {children}
    </PaletteContext.Provider>
  )
}

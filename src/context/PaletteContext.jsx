import {createContext} from 'react'

export const PaletteContext = createContext([])

export const PaletteProvider = (props) => {
  const {
    children,
  } = props

  const testInfo = ['#FF6B6B', '#FFA07A', '#6E40C9', '#1F6FEB',]

  return (
    <PaletteContext.Provider
      value={{
        testInfo,
      }}
    >
      {children}
    </PaletteContext.Provider>
  )
}

import {createContext} from 'react'

export const GeneratorContext = createContext([])

export const GeneratorProvider = (props) => {
  const {
    children
  } = props

  const testInfo = {
    file: 'сам файл',
    performance: 'тест 14 мс',
    dominantColors: 'тест 4 штуки',
  }

  return (
    <GeneratorContext.Provider
      value={testInfo}
    >
      {children}
    </GeneratorContext.Provider>
  )
}
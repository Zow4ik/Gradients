import { createContext } from 'react'
import {useGenerator} from '@/hooks/useGenerator.jsx'

export const GeneratorContext = createContext([])

export const GeneratorProvider = (props) => {
  const {
    children
  } = props

  const {
    info,
    updateImage,
    updatePerformance,
  } = useGenerator()

  return (
    <GeneratorContext.Provider
      value={{
        ...info,
        updateImage,
        updatePerformance,
      }}
    >
      {children}
    </GeneratorContext.Provider>
  )
}
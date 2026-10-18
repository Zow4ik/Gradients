const originalWarn = console.warn
console.warn = (...args) => {
  if (args[0]?.includes?.('Invalid Hex value')) return
  originalWarn(...args)
}

import styles from './ExtractColors.module.scss'
import { useContext } from 'react'
import { PaletteContext } from '@/context/PaletteContext.jsx'
import { closest } from 'color-2-name'

const ExtractColors = () => {
  const {
    colors,
  } = useContext(PaletteContext)

  return (
    <div>
      <div className={styles.header}>
        <span className={styles.text}>Extracted Swatches</span>
      </div>
      <ul className={styles.list}>
        {colors.map((color) => (
          <li
            className={styles.item}
            key={color}
          >
            <div className={styles.colorContainer}>
              <span
                style={{backgroundColor: color,}}
                className={styles.colorDecor}
              ></span>
              <span className={styles.colorText}>{closest(color).name}</span>
            </div>
            <span className={styles.text}>{color}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExtractColors
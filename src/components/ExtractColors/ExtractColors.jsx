import styles from './ExtractColors.module.scss'
import {useContext} from 'react'
import {PaletteContext} from '@/context/PaletteContext.jsx'
import Checkbox from '@/components/Checkbox/Checkbox.jsx'
import {closest} from 'color-2-name'

const ExtractColors = () => {
  const {
    colors,
  } = useContext(PaletteContext)

  return (
    <div>
      <div className={styles.header}>
        <span className={styles.text}>Extracted Swatches</span>
        {/*<button className={styles.button}>Manage</button>*/}
      </div>
      <ul className={styles.list}>
        {colors.map((color) => (
          <li
            className={styles.item}
            key={crypto.randomUUID()}
          >
            <div className={styles.colorContainer}>
              {/*<Checkbox />*/}
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
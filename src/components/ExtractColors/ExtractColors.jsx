import styles from './ExtractColors.module.scss'
import {useContext} from 'react'
import {PaletteContext} from '@/context/PaletteContext.jsx'
import Checkbox from '@/components/Checkbox/Checkbox.jsx'

const ExtractColors = () => {
  const {
    testInfo,
  } = useContext(PaletteContext)

  return (
    <div>
      <div className={styles.header}>
        <span className={styles.text}>Extracted Swatches</span>
        <button className={styles.button}>Manage</button>
      </div>
      <ul className={styles.list}>
        {testInfo.map((item) => (
          <li className={styles.item} key={crypto.randomUUID()}>
            <div className={styles.colorContainer}>
              <Checkbox />
              <span className={styles.colorDecor}></span>
              <span className={styles.colorText}>название цвета</span>
            </div>
            <span className={styles.text}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExtractColors
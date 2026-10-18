import styles from './CustomSingleRange.module.scss'
import { useContext } from 'react'
import { SettingsGradientContext } from '@/context/SettingsGradientContext.jsx'

const CustomSingleRange = () => {
  const {
    angle,
    changeAngle,
  } = useContext(SettingsGradientContext)

  return (
    <input
      value={angle}
      className={styles.range}
      type='range'
      onInput={(event) => changeAngle(+event.target.value)}
      min='0'
      max='360'
    />
  )
}

export default CustomSingleRange
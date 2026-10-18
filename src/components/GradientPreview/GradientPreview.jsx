import styles from './GradientPreview.module.scss'
import {useContext} from 'react'
import {PaletteContext} from '@/context/PaletteContext.jsx'
import {SettingsGradientContext} from '@/context/SettingsGradientContext.jsx'

const GradientPreview = () => {
  const { stops } = useContext(PaletteContext)
  const { gradientMode, angle, shape } = useContext(SettingsGradientContext)

  if (!stops || stops.length === 0) return null

  const stopsStr = stops.map((stop) => `${stop.color} ${stop.position}%`).join(', ')
  let background = ''

  console.log(gradientMode)

  switch (gradientMode) {
    case 'Linear':
      background = `linear-gradient(${angle}deg, ${stopsStr})`
      break
    case 'Radial':
      background = `radial-gradient(${shape} at center, ${stopsStr})`
      break
    case 'Conic':
      background = `conic-gradient(from ${angle}deg at center, ${stopsStr})`
      break
    default:
      background = `linear-gradient(${angle}deg, ${stopsStr})`
  }

  return (
    <div className={styles.container}>
      <div className={styles.preview} style={{ background: background }}>
        <span className={styles.text}>result</span>
      </div>
    </div>
  )
}

export default GradientPreview
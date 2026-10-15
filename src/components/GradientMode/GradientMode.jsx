import styles from './GradientMode.module.scss'
import {useContext} from 'react'
import {SettingsGradientContext} from '@/context/SettingsGradientContext.jsx'

const GradientMode = () => {
  const {
    gradientMode,
    angle,
    shape,
  } = useContext(SettingsGradientContext)

  const buttonsInfo = [
    { nameImage: 'linear', text: 'Linear' },
    { nameImage: 'radial', text: 'Radial' },
    { nameImage: 'conic', text: 'Conic' },
    { nameImage: 'rep-lin', text: 'Rep. Lin' },
    { nameImage: 'rep-rad', text: 'Rep. Rad' },
    { nameImage: 'mesh', text: 'Mesh' },
  ]

  return (
    <div className={styles.gradientMode}>
      <div className={styles.containerContent}>
        <span className={styles.mode}>Gradient Mode</span>
        <span className={styles.modeActive}>{gradientMode} (Active)</span>
      </div>
      <div className={styles.containerMode}>
        {buttonsInfo.map((button) => (
          <button
            key={button.text}
            className={`${styles.buttonMode} ${button.text === gradientMode ? styles.active: ''}`}
          >
            <img
              className={styles.imageMode}
              src={`/Gradients/images/${button.nameImage}.svg`}
              alt=""
              width="17"
              height="21"
              loading="lazy"
            />
            <span className={styles.textMode}>{button.text}</span>
          </button>
        ))}
      </div>
      <div className={styles.containerContent}>
        <span className={styles.angle}>Angle</span>
        <span className={styles.angleDegree}>{angle}°</span>
      </div>
      <div>
        {/*сейчас от 0 до 100, когда буду делать функционал сделать до 360*/}
        <input className={styles.range} type='range'/>
      </div>
      <div className={styles.containerContent}>
        <div className={styles.containerContent}>
          <span className={styles.shape}>Shape:</span>
          <div className={styles.containerContent}>
            <button className={`${styles.shapeButton} ${shape === 'ellipse' ? styles.active : ''}`}>Ellipse</button>
            <button className={`${styles.shapeButton} ${shape === 'circle' ? styles.active : ''}`}>Circle</button>
          </div>
        </div>
        <p className={styles.pos}>
          <span>Pos: </span>
          Center (50% 50%)
        </p>
      </div>
    </div>
  )
}

export default GradientMode
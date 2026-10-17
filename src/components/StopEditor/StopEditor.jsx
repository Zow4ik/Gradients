import styles from './StopEditor.module.scss'
import CustomMultiRange from '@/components/CustomMultiRange/CustomMultiRange.jsx'
import Select from '@/components/Select/Select.jsx'
import {useContext} from 'react'
import {SettingsGradientContext} from '@/context/SettingsGradientContext.jsx'

const StopEditor = () => {
  const {
    blend,
    space,
    changeBlend,
    changeSpace,
  } = useContext(SettingsGradientContext)

  return (
    <div className={styles.container}>
      <div className={styles.containerOptions}>
        <div className={styles.containerContent}>
          <label htmlFor='blend' className={styles.textOption}>Blend:</label>
          <Select
            value={blend}
            changeValue={changeBlend}
            id='blend'
            options={['Normal', 'Overlay', 'Screen', 'Multiply', 'Soft Light']}
          />
        </div>
        <div className={styles.containerContent}>
          <label htmlFor='space' className={styles.textOption}>Space:</label>
          <Select
            value={space}
            changeValue={changeSpace}
            id='space'
            options={['OKLCH', 'OKLab', 'sRGB']}
          />
        </div>
        <label className={styles.containerContent}>
          <input type='checkbox' className={`visually-hidden ${styles.checkbox}`}/>
          <span className={styles.emulator}></span>
          <span className={styles.textOption}>Grain</span>
        </label>
      </div>
      <div>
        <CustomMultiRange />
      </div>
      <div className={styles.containerOptions}>
        <button className={`${styles.buttonStop} ${styles.special}`}>
          +  Add Stop
          <span>(4/4)</span>
        </button>
        <div className={styles.buttonContainer}>
          <button className={styles.buttonStop}>
            <img
              src="/Gradients/images/remove.svg"
              alt=""
              width="15"
              height="16"
              loading="lazy"
            />
            Remove
          </button>
          <button className={styles.buttonStop}>
            <img
              src="/Gradients/images/reverse.svg"
              alt=""
              width="15"
              height="16"
              loading="lazy"
            />
            Reverse
          </button>
          <button className={styles.buttonStop}>
            <img
              src="/Gradients/images/reset.svg"
              alt=""
              width="15"
              height="16"
              loading="lazy"
            />
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default StopEditor
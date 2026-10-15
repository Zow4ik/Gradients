import styles from './StopEditor.module.scss'
import CustomRange from '@/components/CustomRange/CustomRange.jsx'

const StopEditor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerOptions}>
        <div className={styles.containerContent}>
          <label htmlFor='blend' className={styles.textOption}>Blend:</label>
          <select id='blend' className={styles.select}>
            <option name='Normal'>Normal</option>
            <option name='Overlay'>Overlay</option>
            <option name='Screen'>Screen</option>
            <option name='Multiply'>Multiply</option>
            <option name='Soft Light'>Soft Light</option>
          </select>
        </div>
        <div className={styles.containerContent}>
          <label htmlFor='space' className={styles.textOption}>Space:</label>
          <select id='space' className={styles.select}>
            <option name='OKLCH'>OKLCH</option>
            <option name='OKLab'>OKLab</option>
            <option name='sRGB'>sRGB</option>
          </select>
        </div>
        <label className={styles.containerContent}>
          <input type='checkbox' className={`visually-hidden ${styles.checkbox}`}/>
          <span className={styles.emulator}></span>
          <span className={styles.textOption}>Grain</span>
        </label>
      </div>
      <div>
        <CustomRange />
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
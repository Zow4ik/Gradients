import styles from './StopEditor.module.scss'
import CustomMultiRange from '@/components/CustomMultiRange/CustomMultiRange.jsx'
import Select from '@/components/Select/Select.jsx'
import { useContext } from 'react'
import { SettingsGradientContext } from '@/context/SettingsGradientContext.jsx'
import { PaletteContext } from '@/context/PaletteContext.jsx' // 1. Импортируем контекст палитры

const StopEditor = () => {
  const {
    blend,
    space,
    grain,
    changeBlend,
    changeSpace,
    changeGrain,
  } = useContext(SettingsGradientContext)

  // 2. Достаем стопы и функции управления из контекста палитры
  const {
    stops,
    addStop,
    removeStop,
    reverseStops,
    resetStops
  } = useContext(PaletteContext)

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
          <input
            checked={grain}
            onChange={(event) => changeGrain(event.target.checked)}
            type='checkbox'
            className={`visually-hidden ${styles.checkbox}`}
          />
          <span className={styles.emulator}></span>
          <span className={styles.textOption}>Grain</span>
        </label>
      </div>
      <div>
        <CustomMultiRange />
      </div>
      <div className={styles.containerOptions}>
        <button
          className={`${styles.buttonStop} ${styles.special}`}
          onClick={addStop}
          disabled={stops.length >= 4}
        >
          + Add Stop
          <span>({stops.length}/4)</span>
        </button>
        <div className={styles.buttonContainer}>
          <button
            className={styles.buttonStop}
            onClick={removeStop}
            disabled={stops.length <= 2}
          >
            <img
              src="/Gradients/images/remove.svg"
              alt=""
              width="15"
              height="16"
              loading="lazy"
            />
            Remove stop
          </button>
          <button
            className={styles.buttonStop}
            onClick={reverseStops}
          >
            <img
              src="/Gradients/images/reverse.svg"
              alt=""
              width="15"
              height="16"
              loading="lazy"
            />
            Reverse
          </button>
          <button
            className={styles.buttonStop}
            onClick={resetStops}
          >
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
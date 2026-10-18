import styles from './StopEditor.module.scss'
import CustomMultiRange from '@/components/CustomMultiRange/CustomMultiRange.jsx'
import { useContext } from 'react'
import { PaletteContext } from '@/context/PaletteContext.jsx'

const StopEditor = () => {
  const {
    stops,
    addStop,
    removeStop,
    reverseStops,
    resetStops
  } = useContext(PaletteContext)

  return (
    <div className={styles.container}>
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
import styles from './GradientWorkspace.module.scss'
import {useContext} from 'react'
import {GeneratorContext} from '@/context/GeneratorContext.jsx'

const GradientWorkspace = () => {
  const {
    file,
    performance,
    dominantColors,
  } = useContext(GeneratorContext)

  return (
    <div className={styles.GradientWorkspaceContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <img
            src="/Gradients/images/traffic-lights.svg"
            alt=""
            width="48"
            height="12"
            loading="lazy"
          />
          <span className={styles.nameFile}>{file}</span>
        </div>
        <span className={styles.performance}>{performance}</span>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <img
            src="/Gradients/images/default-image-generator.jpg"
            alt=""
            width=""
            height=""
            loading="lazy"
          />
          <span className={styles.imageText}>{dominantColors}</span>
        </div>
        <div>правый блок</div>
      </div>
    </div>
  )
}

export default GradientWorkspace
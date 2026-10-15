import styles from './GradientWorkspace.module.scss'
import {useContext} from 'react'
import {GeneratorContext} from '@/context/GeneratorContext.jsx'

const GradientWorkspace = () => {
  const {
    file,
    performance,
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
      <div>некст блок</div>
    </div>
  )
}

export default GradientWorkspace
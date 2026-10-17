import styles from './GradientWorkspace.module.scss'
import {useContext} from 'react'
import {GeneratorContext} from '@/context/GeneratorContext.jsx'
import ExtractColors from '@/components/ExtractColors/ExtractColors.jsx'
import GradientMode from '@/components/GradientMode/GradientMode.jsx'
import StopEditor from '@/components/StopEditor/StopEditor.jsx'
import {PaletteContext} from '@/context/PaletteContext.jsx'

const GradientWorkspace = () => {
  const {
    nameFile,
    performance,
    imageUrl,
  } = useContext(GeneratorContext)

  const {
    dominantColors,
  } = useContext(PaletteContext)

  let image = null

  if (imageUrl) {
    image = <img
      src={imageUrl}
      alt=""
      loading="lazy"
    />
  } else {
    image = <img
      src="/Gradients/images/default-image-generator.jpg"
      alt=""
      width="628"
      height="580"
      loading="lazy"
    />
  }

  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <img
            src="/Gradients/images/traffic-lights.svg"
            alt=""
            width="48"
            height="12"
            loading="lazy"
          />
          <span className={styles.nameFile}>{nameFile}</span>
        </div>
        <span className={styles.performance}>QUANTIZED IN {performance}MS</span>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          {image}
          <span className={styles.imageText}>{dominantColors} Dominant Samples</span>
        </div>
        <div className={styles.toolsContainer}>
          <ExtractColors />
          <GradientMode />
          <StopEditor />
        </div>
      </div>
    </div>
  )
}

export default GradientWorkspace
import styles from './Generator.module.scss'
import TitleBlock from '@/components/TitleBlock/TitleBlock.jsx'
import GradientWorkspace from '@/components/GradientWorkspace/GradientWorkspace.jsx'
import GradientPreview from '@/components/GradientPreview/GradientPreview.jsx'
import CompleteCode from '@/components/CompleteCode/CompleteCode.jsx'

const Generator = () => {
  return (
    <section>
      <div className={`container ${styles.generatorContainer}`}>
        <TitleBlock
          badgeText='Browser Native & Private'
          titleText='Turn any photo into a'
          subtitleText='Upload an image, get the code. Zero API, all in your browser.'
          uploadButtonText='Upload Photo'
          spanText1='or drop an image anywhere'
          spanText2='PNG, JPG, WebP up to 25MB'
        />
      </div>
      <div className={styles.containerContent}>
        <GradientWorkspace />
        <GradientPreview />
        <CompleteCode />
      </div>
    </section>
  )
}

export default Generator
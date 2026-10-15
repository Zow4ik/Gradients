import styles from './GradientPreview.module.scss'

const GradientPreview = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.preview}
        style={{background: 'linear-gradient(96.53deg, #ff6b6b -0.56%, #ffa07a 24.72%, #6e40c9 65.17%, #1f6feb 100.56%)'}}
      ></div>
    </div>
  )
}

export default GradientPreview
import styles from './Copyright.module.scss'

const Copyright = () => {
  const date = new Date().getFullYear()

  return (
    <p className={styles.copyright}>© {date} Gradients. All rights reserved.</p>
  )
}

export default Copyright
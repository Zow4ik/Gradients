import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <a className={styles.logo} href='/'>
      <img
        src="/Gradients/images/logo.svg"
        alt=""
        width="32"
        height="32"
        loading="lazy"
      />
      <span className={styles.textLogo}>Gradients</span>
    </a>
  )
}

export default Logo
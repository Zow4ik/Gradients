import styles from './Badge.module.scss'

const Badge = (props) => {
  const {
    children,
    background = false,
  } = props

  const backgroundBadge = background
    ? styles.background
    : ''

  return (
    <span className={`${styles.badge} ${backgroundBadge}`}>{children}</span>
  )
}

export default Badge
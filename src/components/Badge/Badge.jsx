import styles from './Badge.module.scss'

const Badge = (props) => {
  const {
    children,
    background = false,
    additionalClasses = '',
  } = props

  const backgroundBadge = background
    ? styles.background
    : ''

  return (
    <span
      className={`${styles.badge} ${backgroundBadge} ${additionalClasses}`.trim()
    }>
      {children}
    </span>
  )
}

export default Badge
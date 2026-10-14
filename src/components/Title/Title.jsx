import styles from './Title.module.scss'

const Title = (props) => {
  const {
    title,
    children,
    additionalClasses = '',
    span = false,
  } = props

  const Tag = title

  return (
    <Tag className={`${styles[title]} ${additionalClasses}`.trim()}>
      {children}
      {span && <span className={styles.span}> {span}</span>}
    </Tag>
  )
}

export default Title
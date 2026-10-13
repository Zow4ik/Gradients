import styles from './Title.module.scss'

const Title = (props) => {
  const {
    title,
    children,
    span = false,
  } = props

  if (title === 'h1') {
    return <h1 className={styles.h1}>
      {children}
      {span && <span className={styles.span}> {span}</span>}
    </h1>
  }

  if (title === 'h2') {
    return <h2 className={styles.h2}>
      {children}
      {span && <span className={styles.span}> {span}</span>}
    </h2>
  }

  if (title === 'h3') {
    return <h3 className={styles.h3}>
      {children}
      {span && <span className={styles.span}> {span}</span>}
    </h3>
  }
}

export default Title
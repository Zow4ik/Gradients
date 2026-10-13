import styles from './Card.module.scss'
import Title from '@/components/Title/Title.jsx'

const Card = (props) => {
  const {
    nameImage,
    title,
    span,
    text,
  } = props

  return (
    <li className={styles.card}>
      <img
        className={styles.image}
        src={`/Gradients/images/${nameImage}`}
        alt=""
        width="48"
        height="48"
        loading="lazy"
      />
      <Title title='h3'>{title}</Title>
      <span className={styles.span}>{span}</span>
      <p className={styles.text}>{text}</p>
    </li>
  )
}

export default Card
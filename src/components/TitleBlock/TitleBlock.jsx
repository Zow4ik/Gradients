import styles from './TitleBlock.module.scss'
import Badge from '@/components/Badge/Badge.jsx'
import Title from '@/components/Title/Title.jsx'
import UploadButton from '@/components/UploadButton/UploadButton.jsx'

const TitleBlock = (props) => {
  const {
    badgeText,
    titleText,
    subtitleText,
    uploadButtonText,
    spanText1,
    spanText2,
  } = props

  return (
    <div className={styles.titleContainer}>
      <Badge
        background={true}
        additionalClasses={styles.badge}
      >
        {badgeText}
      </Badge>
      <Title
        title='h1'
        span='CSS gradient'
        additionalClasses={styles.title}
      >
        {titleText}
      </Title>
      <p className={styles.subtitle}>
        {subtitleText}
      </p>
      <UploadButton additionalClasses={styles.uploadButton}>{uploadButtonText}</UploadButton>
      <div className={styles.textContainer}>
        <span className={styles.text}>{spanText1}</span>
        <span className={styles.text}>{spanText2}</span>
      </div>
    </div>
  )
}

export default TitleBlock
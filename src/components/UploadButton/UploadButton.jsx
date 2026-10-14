import styles from './UploadButton.module.scss'

const UploadButton = (props) => {
  const {
    children,
    additionalClasses = '',
  } = props

  return (
    <label className={additionalClasses}>
      <input type='file' className='visually-hidden'/>
      <span className={styles.text}>{children}</span>
    </label>
  )
}

export default UploadButton
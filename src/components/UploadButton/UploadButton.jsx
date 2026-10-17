import styles from './UploadButton.module.scss'
import {useContext} from 'react'
import {GeneratorContext} from '@/context/GeneratorContext.jsx'

const UploadButton = (props) => {
  const {
    children,
    additionalClasses = '',
  } = props

  const {
    updateImage,
  } = useContext(GeneratorContext)

  return (
    <label className={additionalClasses}>
      <input
        type='file'
        className='visually-hidden'
        onChange={(event) => updateImage(event.target.files[0])}
      />
      <span className={styles.text}>{children}</span>
    </label>
  )
}

export default UploadButton
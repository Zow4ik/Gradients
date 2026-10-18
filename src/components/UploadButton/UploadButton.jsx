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

  function uploadFile(file) {
    if ( !['image/png', 'image/jpeg', 'image/webp'].includes(file.type) ) {
      alert('неправильный тип файла, загрузите png, jpeg или webp')
      return
    }

    if ( file.size > 26_214_400 ) {
      alert('файл слишком большой! максимум 25мб')
      return
    }

    updateImage(file)

    setTimeout(() => {
      const generator = document.getElementById('generator')
      generator.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  return (
    <label className={additionalClasses}>
      <input
        type='file'
        className='visually-hidden'
        onChange={(event) => uploadFile(event.target.files[0])}
      />
      <span className={styles.text}>{children}</span>
    </label>
  )
}

export default UploadButton
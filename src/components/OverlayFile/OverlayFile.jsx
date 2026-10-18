import styles from './OverlayFile.module.scss'
import { useContext, useEffect, useRef, useState } from 'react'
import { GeneratorContext } from '@/context/GeneratorContext.jsx'

const OverlayFile = () => {
  const [isDrag, setIsDrag] = useState(false)
  const counter = useRef(0)

  const {
    updateImage,
  } = useContext(GeneratorContext)

  useEffect(() => {
    function dragEnter(event) {
      event.preventDefault()

      if (event.dataTransfer.types.includes('Files')) {
        counter.current += 1
        setIsDrag(true)
      }
    }

    function dragLeave(event) {
      event.preventDefault()
      counter.current -= 1

      if (counter.current === 0) {
        setIsDrag(false)
      }
    }

    function dragDrop(event) {
      event.preventDefault()
      counter.current = 0
      setIsDrag(false)
    }

    function dragOver(event) {
      event.preventDefault()
    }

    document.addEventListener('dragenter', dragEnter)
    document.addEventListener('dragleave', dragLeave)
    document.addEventListener('drop', dragDrop)
    document.addEventListener('dragover', dragOver)

    return () => {
      document.removeEventListener('dragenter', dragEnter)
      document.removeEventListener('dragleave', dragLeave)
      document.removeEventListener('drop', dragDrop)
      document.removeEventListener('dragover', dragOver)
    }
  }, []);

  function dragDrop(event) {
    event.preventDefault()
    const { files } = event.dataTransfer

    if ( !['image/png', 'image/jpeg', 'image/webp'].includes(files[0].type ) ) {
      alert('неправильный тип файла, загрузите png, jpeg или webp')
      return
    }

    if ( files[0].size > 26_214_400 ) {
      alert('файл слишком большой! максимум 25мб')
      return
    }

    updateImage(files[0])

    setTimeout(() => {
      const generator = document.getElementById('generator')
      generator.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  return (
    <>
      {isDrag && (
        <div className={styles.overlay}>
          <div
            className={styles.container}
            onDrop={dragDrop}
          >
            <div className={styles.content}>
              <img
                src="/Gradients/images/dropFile.svg"
                alt=""
                width="96"
                height="96"
                loading="lazy"
              />
              <p className={styles.text}>Drop your image anywhere</p>
              <p className={styles.textType}>PNG, JPG, WebP, HEIC • up to 25MB</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default OverlayFile
import styles from './Checkbox.module.scss'

const Checkbox = () => {
  return (
    <label>
      <input defaultChecked type='checkbox' className={`${styles.input} visually-hidden`}/>
      <span className={styles.emulator}></span>
    </label>
  )
}

export default Checkbox
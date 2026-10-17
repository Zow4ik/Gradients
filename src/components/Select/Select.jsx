import styles from './Select.module.scss'

const Select = (props) => {
  const {
    id,
    options,
    value,
    changeValue
  } = props

  return (
    <select
      value={value}
      id={id}
      className={styles.select}
      onChange={(event) => changeValue(event.target.value)}
    >
      {options.map((option) => (
        <option
          name={option}
          key={option}
        >
          {option}
        </option>
      ))}
    </select>
  )
}

export default Select
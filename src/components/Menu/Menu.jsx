import styles from './Menu.module.scss'

const Menu = () => {
  const items = [
    { text: 'Generator', href: '/' },
  ]

  return (
    <nav>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.text}>
            <a href={item.href} className={`${styles.link} ${styles.active}`}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
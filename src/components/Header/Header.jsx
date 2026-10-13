import styles from './Header.module.scss'
import Logo from '@/components/Logo/Logo.jsx'
import Menu from '@/components/Menu/Menu.jsx'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Logo />
        <Menu />
      </div>
    </header>
  )
}

export default Header
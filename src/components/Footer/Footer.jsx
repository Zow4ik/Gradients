import styles from './Footer.module.scss'
import Copyright from '@/components/Copyright/Copyright.jsx'
import MyContact from '@/components/MyContact/MyContact.jsx'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <Copyright />
        <MyContact />
      </div>
    </footer>
  )
}

export default Footer
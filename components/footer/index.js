import React from 'react'
import styles from './styles.module.scss'
import Links from './Links'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Links />
      </div>
    </footer>
  )
}

export default Footer

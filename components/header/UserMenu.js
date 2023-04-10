import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

const UserMenu = ({ loggedIn }) => {
  return (
    <div className={styles.menu}>
      <h4>Welcome to Shopay!</h4>
      {loggedIn ? (
        <div className={styles.flex}>
          <img
            src="https://th.bing.com/th/id/OIP.w6Cs6qz234c71XloeqKdwgHaHa?pid=ImgDet&rs=1"
            alt=""
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h3>Mahmoud</h3>
            <span>Sign Out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined}>Login</button>
        </div>
      )}

      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">My Orders</Link>
        </li>
        <li>
          <Link href="/profile/messages">Message Center</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/Wishlist">Wishlist</Link>
        </li>
      </ul>
    </div>
  )
}

export default UserMenu

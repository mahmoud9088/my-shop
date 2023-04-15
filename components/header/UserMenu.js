import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

const UserMenu = ({ session }) => {
  return (
    <div className={styles.menu}>
      <h4>Welcome to Shopay!</h4>
      {session ? (
        <div className={styles.flex}>
          <img src={session?.user?.image} alt="" className={styles.menu__img} />
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h3>Mahmoud</h3>
            <span onClick={signOut}>Sign Out</span>
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

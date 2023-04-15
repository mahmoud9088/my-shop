import styles from './styles.module.scss'

import React, { useState } from 'react'
import { MdOutlineSecurity } from 'react-icons/md'
import { BsSuitHeart } from 'react-icons/bs'
import { RiAccountPinCircleLine, RiArrowDropDownFill } from 'react-icons/ri'
import Link from 'next/link'
import UserMenu from './UserMenu'
import { useSession } from 'next-auth/react'

const Top = () => {
  const { data: session } = useSession()
  console.log(session, 'sssssssseeeeeeeeeeeeeeeessssssssssssssion')

  const [loggedIn, setLoggedIn] = useState(true)
  const [visible, setVisible] = useState(false)
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li>
            <img
              src={
                'https://vectorflags.s3.amazonaws.com/flags/eg-square-01.png'
              }
            />
            <span>Egypt / LE</span>
          </li>

          <li>
            <MdOutlineSecurity />
            <span>Buyer Protection</span>
          </li>
          <li>
            <span>Customer Service</span>
          </li>
          <li>
            <span>Help</span>
          </li>
          <li>
            <BsSuitHeart />
            <Link href={`/profile/wishlist`}>
              <span>Wishlist</span>
            </Link>
          </li>
          <li
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}>
            {session ? (
              <div className={styles.flex}>
                <img src={session?.user?.image} />
                <span>{session?.user?.name}</span>
                <RiArrowDropDownFill />
              </div>
            ) : (
              <div className={styles.flex}>
                <RiAccountPinCircleLine />
                <span>Account</span>
                <RiArrowDropDownFill />
              </div>
            )}
            {visible && <UserMenu session={session} />}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Top

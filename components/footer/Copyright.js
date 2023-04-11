import Link from 'next/link'
import styles from './styles.module.scss'
import { IoLocationSharp } from 'react-icons/io5'

const copyrightData = [
  {
    name: 'Privacy Center',
    link: '',
  },
  {
    name: 'Privacy and Cookie Policy',
    link: '',
  },
  {
    name: 'Manage Cookies',
    link: '',
  },
  ,
  {
    name: 'Terms & Conditions',
    link: '',
  },
]

const Copyright = () => {
  return (
    <div className={styles.footer__copyright}>
      <p>&copy; 2023 SHOPPAY. All rights reserved.</p>

      <ul>
        {copyrightData.map(({ name, link }, index) => (
          <li key={index}>
            <Link href={link}>{name}</Link>
          </li>
        ))}

        <li className={styles.location}>
          <Link href="">
            <IoLocationSharp />
            <span>Egypt</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Copyright

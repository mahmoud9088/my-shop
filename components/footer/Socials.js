import { FaFacebookF } from 'react-icons/fa'
import styles from './styles.module.scss'
import {
  BsInstagram,
  BsPinterest,
  BsSnapchat,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs'
const Socials = () => {
  return (
    <div className={styles.footer__socials}>
      <section>
        <h3>STAY CONNECTED</h3>
        <ul>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <BsYoutube />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <BsSnapchat />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <BsPinterest />
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Socials

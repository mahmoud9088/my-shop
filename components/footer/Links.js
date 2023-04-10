import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

const footerLinks = [
  {
    heading: 'SHOPPAY',
    links: [
      {
        name: 'About us',
        link: '/about-us',
      },
      {
        name: 'Contact us',
        link: '/contact-us',
      },
      {
        name: 'Social Responsibility',
        link: '/social-responsibility',
      },
    ],
  },
  {
    heading: 'HELP & SUPPORT',
    links: [
      {
        name: 'Shipping info',
        link: '/shipping-info',
      },
      {
        name: 'Returns',
        link: '/returns',
      },
      {
        name: 'How To Order',
        link: '/how-to-order',
      },
      {
        name: 'How To Track',
        link: '/how-to-track',
      },
      {
        name: 'Size Guide',
        link: '/size-guide',
      },
    ],
  },
  {
    heading: 'Customer service',
    links: [
      {
        name: 'Customer service',
        link: '/customer-service',
      },
      {
        name: 'Terms and Conditions',
        link: '/terms-and-conditions',
      },
      {
        name: 'Consumers (Transactions)',
        link: '/consumer',
      },
      {
        name: 'Take our feedback survey',
        link: '/take-our-feedback-survey',
      },
    ],
  },
]

const Links = () => {
  return (
    <div className={styles.footer__links}>
      {footerLinks.map(({ heading, links }, index) => (
        <ul key={index}>
          <b>{heading}</b>
          {links.map(({ name, link }, index) => (
            <li key={index}>
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

export default Links

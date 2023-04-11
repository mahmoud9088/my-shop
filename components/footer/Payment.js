import Image from 'next/image'
import styles from './styles.module.scss'

const paymentMethods = [
  {
    name: 'visa',
    image: 'visa.webp',
  },
  {
    name: 'mastercard',
    image: 'mastercard.webp',
  },
  ,
  {
    name: 'paypal',
    image: 'paypal.webp',
  },
]

const Payment = () => {
  return (
    <div className={styles.footer__payment}>
      <h3>WE ACCEPT</h3>

      <div className={styles.methods__wrapper}>
        {paymentMethods.map(({ name, image }, index) => (
          <img key={index} src={'/images/payment/' + image} alt={name} />
        ))}
      </div>
    </div>
  )
}

export default Payment

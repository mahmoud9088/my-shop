import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />

      <h1 className={styles.text}>Hello there</h1>
      <button>Click</button>

      <ul>
        <li>item 1</li>
        <li>item 1</li>
        <li>item 1</li>
        <li>item 1</li>
      </ul>
    </>
  )
}

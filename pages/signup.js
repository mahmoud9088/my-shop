import Footer from '@/components/footer'
import Header from '@/components/header'
import React, { useState } from 'react'
import styles from '@/styles/signin.module.scss'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { SiMinutemailer } from 'react-icons/si'
import Link from 'next/link'
import { Form, Formik } from 'formik'
import Input from '@/components/common/inputs/login-input'
import { IoKeyOutline } from 'react-icons/io5'

import * as Yub from 'yup'
import CircledIconBtn from '@/components/common/buttons/circledIconBtn'
import { getProviders } from 'next-auth/react'

const signup = ({ providers }) => {
  console.log(providers, 'providers....')
  const [registerData, setRegisterData] = useState({
    email: '',
    name: '',
    password: '',
    conf_password: '',
  })
  const handleDataChange = (e) => {
    const { name, value } = e.target
    setRegisterData({ ...registerData, [name]: value })
  }

  const { email, name, password, conf_password } = registerData

  const registerValidation = Yub.object({
    email: Yub.string().required().email('please enter a valid email!'),
    name: Yub.string()
      .min(2, 'name has to be more than 2 chars!')
      .matches(/^[aA-zZ]/, 'name must be chars only!')
      .required(),
    password: Yub.string().required('password is required!'),
    conf_password: Yub.string()
      .required()
      .oneOf([Yub.ref('password')], "the two passwords don't match!"),
  })

  return (
    <div>
      <Header />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We'd be happy to join us ! <Link href="/">Go Store</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Sign up</h1>
            <p>
              Get access to one of the best Eshopping services in the world.
            </p>
            <Formik
              enableReinitialize
              initialValues={{ email, name, password, conf_password }}
              validationSchema={registerValidation}>
              {(form) => (
                <Form>
                  <Input
                    icon={<SiMinutemailer />}
                    type="email"
                    name="email"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={handleDataChange}
                  />
                  <Input
                    icon={<SiMinutemailer />}
                    type="text"
                    name="name"
                    placeholder="Enter your full name..."
                    value={name}
                    onChange={handleDataChange}
                  />
                  <Input
                    icon={<IoKeyOutline />}
                    type="password"
                    name="password"
                    placeholder="Enter your password..."
                    value={password}
                    onChange={handleDataChange}
                  />
                  <Input
                    icon={<IoKeyOutline />}
                    type="password"
                    name="conf_password"
                    placeholder="Re-type the password..."
                    value={conf_password}
                    onChange={handleDataChange}
                  />

                  <CircledIconBtn type="submit" text="Sign up" />
                  {/* {login_error && (
                    <span className={styles.error}>{login_error}</span>
                  )} */}
                </Form>
              )}
            </Formik>
            <div className={styles.login__socials}>
              <span className={styles.or}>Or continue with</span>
              <div className={styles.login__socials_wrap}>
                {providers.map((provider) => (
                  <div key={provider.name}>
                    <button
                      className={styles.social__btn}
                      onClick={() => signIn(provider.id)}>
                      <img
                        src={`/icons/${provider.name}.png`}
                        alt={provider.name}
                      />
                      Sign in with{provider.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default signup

export async function getServerSideProps(context) {
  const providers = Object.values(await getProviders())

  console.log(providers, '----- providers')

  return {
    props: { providers },
  }
}

import React from 'react'
import styles from './styles.module.scss'
import { ErrorMessage, useField } from 'formik'

const LoginInput = ({ icon, ...inputProps }) => {
  const [field, meta] = useField(inputProps)
  console.log(field, 'field')
  return (
    <>
      <div
        className={`${styles.input__container} ${
          meta.touched && meta.error ? styles.error : ''
        }`}>
        <span className={styles.icon}>{icon}</span>
        <input type={field.type} name={field.name} {...field} {...inputProps} />

        {meta.touched && meta.error && (
          <div className={styles.error__popup}>
            <span />
            <ErrorMessage name={field.name} />
          </div>
        )}
      </div>
    </>
  )
}

export default LoginInput

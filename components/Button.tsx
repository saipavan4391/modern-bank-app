import React from 'react'
import styles from '../styles/styles'

const Button = () => {
  return (
    <div className={`py-8`}>
      <button className={`bg-blue-gradient h-16 text-black px-8 font-poppins font-semibold ${styles.paragraph} rounded-xl`}>Get Started</button>
    </div>
    
  )
}

export default Button
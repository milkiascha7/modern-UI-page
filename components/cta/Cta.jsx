import React from 'react'
import styles from '../../styles/cta.module.css'

const Cta = () => {
  return (
    <div className={styles.gpt3__cta}>
        <div className={styles.gpt3__cta__content}>
          <p>Request Early Access to Get Started</p>
          <h3>Register today and start exploring</h3>
        </div>
        <div className={styles.gpt3__cta__btn}>
          <button type="button">Get Started</button>
        </div>
    </div>
  )
}

export default Cta
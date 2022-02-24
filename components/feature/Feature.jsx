import React from 'react'
import styles from '../../styles/feature.module.css'

const Feature = ({ title, text }) => (
  <div className={styles.gpt3__features__container__feature}>
    <div className={styles.gpt3__features__container__feature__title}>
      <div />
      <h1>{title}</h1>
    </div>
    <div className={styles.gpt3__features__container__feature__text}>
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
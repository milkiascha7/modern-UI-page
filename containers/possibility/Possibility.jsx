import Image from 'next/image'
import React from 'react'
import styles from '../../styles/possibility.module.css'
import possibilityImage from '../../public/images/possibility.png'



const Possibility = () => {
  return (
    <div className={ `${styles.gpt3__possibility} ${styles.section__padding}`}>
        <div className={styles.gpt3__possibility_image}>
          <Image src={possibilityImage} alt="possibility Image" />
        </div>
        <div className={styles.gpt3__possibility__content}>
          <h4>Request Early Access to Get Started</h4>
          <h1 className='gradient__text'>The Possibilites aer beyond your imagination</h1>
          <p>Yet bed any for travelling assistance indulgance unpleasing. Not thoughts all exercise blessing indulgance way everything joy interaction boostrous the attachment. Party we years to order slow asked of</p>
          <h4>Request Early access to get started</h4>
        </div>
    </div>
  )
}

export default Possibility
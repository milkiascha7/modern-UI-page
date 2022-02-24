import Image from 'next/image'
import React from 'react'
import styles from '../../styles/header.module.css'
import people from '../../public/images/people.png'
import ai from '../../public/images/ai.png'

const Header = () => {
  return (
    <div className={`${styles.gpt3__header} ${styles.section__padding}`} id="home">
        <div className={styles.gpt3__header__content}>
          <h1 className={styles.gradient__text}>Let's Build Something with Gpt3 Open Ai</h1>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          
          <div className={styles.gpt3__header__content__input}>
            <input type="email" placeholder='Your Email address' />
            <button type="button">Get Started</button>
          </div>

          <div className={styles.gpt3__header__content__people}>
            <Image src={people} alt="people"  />
            <p>1600 people have requested in the last 24 hours </p>
          </div>
        </div>
        
        <div className={styles.gpt3__header__image}>
          <Image src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header
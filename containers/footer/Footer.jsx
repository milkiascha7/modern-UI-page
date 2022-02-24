import React from 'react'
import styles from '../../styles/footer.module.css'
import Image from 'next/image'
import gpt3Logo from '../../public/images/logo.svg'


const Footer = () => (
  <div className={`${styles.gpt3__footer} ${styles.section__padding}`}>
    <div className={styles.gpt3__footer__heading}>
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className={styles.gpt3__footer__btn}>
      <p>Request Early Access</p>
    </div>

    <div className={styles.gpt3__footer__links}>
      <div className={styles.gpt3__footer__links__logo}>
        <Image src={gpt3Logo} alt="gpt3_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className={styles.gpt3__footer__links__div}>
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className={styles.gpt3__footer__links__div}>
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className={styles.gpt3__footer__links__div}>
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>
    <div className={styles.gpt3__footer__copyright}>
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
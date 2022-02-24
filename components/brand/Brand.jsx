import React from 'react'
import styles from '../../styles/brand.module.css'
import { shopify, google, slack, atlassian, dropbox } from './imports'
import Image from 'next/image'

const Brand = () => {
  return (
    <div className={ `${styles.gpt3__brand} ${styles.section__padding}`}>
        <div>
          <Image src={google} alt="google" />
        </div>
        <div>
          <Image src={shopify} alt="shopify" />
        </div>
        <div>
          <Image src={slack} alt="slack" />
        </div>
        <div>
          <Image src={atlassian} alt="atlassian" />
        </div>
        <div>
          <Image src={dropbox} alt="dropbox" />
        </div>
    </div>
  )
}

export default Brand
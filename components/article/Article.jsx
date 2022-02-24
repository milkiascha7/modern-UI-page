import Image from 'next/image'
import React from 'react'
import styles from '../../styles/article.module.css'

const Article = ({imageUrl, title, date}) => {
  return (
    <div className={styles.gpt3__blog__container__article}>
        <div className={styles.gpt3__blog__container__article__image}>
          <Image src={imageUrl} alt="blog image" />
        </div> 
        <div className={styles.gpt3__blog__container__article__content}>
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
          </div>
          <p>Read Full Article</p>
        </div>
    </div>
  )
}

export default Article
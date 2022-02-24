import React from 'react'
import { Article } from '../../components'
import styles from '../../styles/blog.module.css'
import { blog01, blog02, blog03, blog04, blog05 } from '../../components/article/imports'


const Blog = () => {
  return (
    <div className={ `${styles.gpt3__blog} ${styles.section__padding} `}>
        <div className={styles.gpt3__blog__heading}>
          <h1 className="gradient__text">A lot is happening, We are blogging about it</h1>
        </div>
        <div className={styles.gpt3__blog__container}>
          <div className={styles.gpt3__blog__container__group__A}>
            <Article imageUrl={blog01} date="sep 26, 2021" title="it is the future. Let's explore" />
          </div>
          <div className={styles.gpt3__blog__container__group__B}>
            <Article imageUrl={blog02} date="oct 10, 2021" title="it is the future. Let's explore" />
            <Article imageUrl={blog03} date="apr 22, 2021" title="it is the future. Let's explore"/>
            <Article imageUrl={blog04} date="oct 16, 2021" title="it is the future. Let's explore" />
            <Article imageUrl={blog05} date="dec 27, 2021" title="it is the future. Let's explore" />
          </div>
        </div>
    </div>
  )
}

export default Blog
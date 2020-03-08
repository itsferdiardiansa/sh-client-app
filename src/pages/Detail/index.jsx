import React from 'react'
import PostItem from '@/components/posts/Item'
import styles from './index.module.scss'

const DetailPost = () => (
  <div className={styles['Container']}>
    <PostItem />
  </div>
)

export default DetailPost
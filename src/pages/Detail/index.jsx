import React from 'react'
import PostItem from '@/components/posts/Item'
import styles from './index.module.scss'

const DetailPage = () => (
  <div className={styles['Container']}>
    <PostItem />
  </div>
)

export default DetailPage
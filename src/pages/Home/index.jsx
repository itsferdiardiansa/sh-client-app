import React from 'react'
import Post from '@/components/posts'
import styles from './index.module.scss'

const HomePage = () => (
  <div className={styles['Container']}>
    <Post />
  </div>
)

export default HomePage
import React from 'react'
import AddPost from './Form'
import PostLists from './Lists'
import styles from './index.module.scss'

const Posts = () => (
  <div className={styles['Post']}>
    <AddPost />

    <PostLists />
  </div>
)

export default Posts
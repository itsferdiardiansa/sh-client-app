import React from 'react'
import PostItem from '@/components/posts/Item'
import styles from './index.module.scss'

const PostLists = () => (
  <div className={styles['Post']}>
    <PostItem />

    <PostItem />

    <PostItem />

    <PostItem />
  </div>
)

export default PostLists
import React from 'react'
import AddPost from './Form'
import PostLists from './Lists'
import styles from './index.module.scss'

const Posts = ({response, isFetching}) => (
  <div className={styles['Post']}>
    <AddPost />

    {
      (response.length && !isFetching)
      ? <PostLists items={response} />
      : null 
    }
  </div>
)

export default Posts
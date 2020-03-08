import React from 'react'
import CommentLists from './Lists'
import styles from './index.module.scss'

const Comments = () => (
  <div className={styles['Comments']}>
    <div className={styles['Comment-lists']}>
      <CommentLists />
    </div>
  </div>
) 

export default Comments
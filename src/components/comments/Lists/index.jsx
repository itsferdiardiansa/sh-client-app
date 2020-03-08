import React from 'react'
import CommentItem from '@/components/comments/Item'
import styles from './index.module.scss'

const CommentLists = () => (
  <div className={styles['Comments']}>
    <div className={styles['Comment-lists']}>
      <CommentItem />

      <CommentItem />
    </div>
  </div>
) 

export default CommentLists
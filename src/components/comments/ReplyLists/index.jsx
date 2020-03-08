import React from 'react'
import CommentItemReply from '@/components/comments/ReplyItem'
import styles from './index.module.scss'

const ReplyLists = () => (
  <div className={styles['Comment']}>
    <CommentItemReply />
  </div>
)

export default ReplyLists
import React from 'react'
import CommentReplyLists from '@/components/comments/ReplyLists'
import CommentReplyForm from '@/components/comments/ReplyForm'
import styles from './index.module.scss'

const CommentReply = () => (
  <div className={styles['Comment']}>
    <div className={styles['Comment__btn-action']}>
      <div className={styles['Reply-btn']}>Reply</div>
    </div>

    <CommentReplyLists />

    <CommentReplyForm />
  </div>
)

export default CommentReply
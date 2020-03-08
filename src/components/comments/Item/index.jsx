import React, { useCallback } from 'react'
// import CommentReply from '@/components/comments/Reply'
import { ReactComponent as AvatarIcon } from '@assets/images/avatar.svg'
import { ReactComponent as TrashIcon } from '@assets/images/trash.svg'
import styles from './index.module.scss'

const CommentItem = ({ postId, name, email, body }) => {
  const handleDeleteComment = () => {
    console.log('Delete comment ...')
  }

  return(
    <div className={styles['Comment']}>
      <div className={styles['Comment__delete']} onClick={handleDeleteComment}>
        <TrashIcon />
      </div>

      <div className={styles['Comment__user-picture']}>
        <AvatarIcon alt="User picture" />
      </div>

      <div className={styles['Comment__message']}>
        <div className={styles['Username']}>
          {name}
        </div>

        <div className={styles['Message']}>{body}</div>
      </div>

      {/* <CommentReply /> */}
    </div>
  )
}

export default CommentItem
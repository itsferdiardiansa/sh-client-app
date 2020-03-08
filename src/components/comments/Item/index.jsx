import React from 'react'
import CommentReply from '@/components/comments/Reply'
import { ReactComponent as AvatarIcon } from '@assets/images/avatar.svg'
import { ReactComponent as TrashIcon } from '@assets/images/trash.svg'
import styles from './index.module.scss'

const CommentItem = () => {
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
          Ferdi Ardiansa
        </div>

        <div className={styles['Message']}>
          Coba kalian cek di YouTube..cari band LOVEBITES.. tapi jangan ngiler,liat penampilan mereka.. merasa minder apa gak dengan mereka
        </div>
      </div>

      <CommentReply />
    </div>
  )
}

export default CommentItem
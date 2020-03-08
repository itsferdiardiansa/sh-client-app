import React from 'react'
import Comments from '@/components/comments/Lists'
import { ReactComponent as AvatarIcon } from '@assets/images/avatar.svg'
import styles from './index.module.scss'

const PostItem = () => (
  <div className={styles['Post']}>
    <div className={styles['Post__header']}>
      <div className={styles['User-picture']}>
        <AvatarIcon alt="User picture" />
      </div>

      <div className={styles['Title-post']}>
        <h3>This is title</h3>
      </div>
    </div>

    <div className={styles['Post__content']}>
      Don’t let slow CI/CD pipelines dictate your day. Switch to CircleCI.
    </div>

    <Comments />
  </div>
)

export default PostItem
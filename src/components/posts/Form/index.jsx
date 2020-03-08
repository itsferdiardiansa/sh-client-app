import React from 'react'
import { Link } from 'react-router-dom'
import Comments from '@/components/comments/Lists'
import { ReactComponent as AvatarIcon } from '@assets/images/avatar.svg'
import { ReactComponent as SettingsIcon } from '@assets/images/settings.svg'
import styles from './index.module.scss'

const PostForm = () => (
  <div className={styles['Post']}>
    <div className={styles['Post__header']}>
      <div className={styles['User-picture']}>
        <AvatarIcon alt="User picture" />
      </div>

      <div className={styles['Title-post']}>
        <input type="text" placeholder="Title" className={styles['Input-title']} />
      </div>
    </div>

    <div className={styles['Post__content']}>
      <textarea placeholder="Content" className={styles['Input-content']}></textarea>
    </div>

    <div className={styles['Post__action']}>
      <button type="button" className={styles['Cancel']}>Cancel</button>
      <button type="button" className={styles['Save']}>Save</button>
    </div>
  </div>
)

export default PostForm
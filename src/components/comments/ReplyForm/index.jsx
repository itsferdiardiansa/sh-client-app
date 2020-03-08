import React from 'react'
import { ReactComponent as AvatarIcon } from '@assets/images/avatar.svg'
import styles from './index.module.scss'

const ReplyForm = () => (
  <div className={styles['Comment-form']}>
    <div className={styles['Comment-form__user-picture']}>
      <AvatarIcon alt="User picture" />
    </div>

    <input type="text" className={styles['Comment-form__input']} placeholder="Write a reply" />
  </div>
)

export default ReplyForm
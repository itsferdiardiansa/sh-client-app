import React from 'react'
import { ReactComponent as AvatarIcon } from '@assets/images/avatar.svg'
import styles from './index.module.scss'

const UserProfile = () => (
  <React.Fragment>
    <div className={styles['User-profile']}>
      <div className={styles['User-profile__photo']}>
        <AvatarIcon alt="User profile" />
      </div>

      <div className={styles['User-profile__name']}>Ferdi Ardiansa</div>
    </div>
  </React.Fragment>
)

export default UserProfile
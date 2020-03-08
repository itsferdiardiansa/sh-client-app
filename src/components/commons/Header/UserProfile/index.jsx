import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AvatarIcon } from '@assets/images/avatar.svg'
import styles from './index.module.scss'

const UserProfile = () => (
  <React.Fragment>
    <div className={styles['User-profile']}>
      <Link to="/" className={styles['User-profile__link']}></Link>
      <div className={styles['User-profile__photo']}>
        <AvatarIcon alt="User profile" />
      </div>

      <div className={styles['User-profile__name']}>Ferdi Ardiansa</div>
    </div>
  </React.Fragment>
)

export default UserProfile
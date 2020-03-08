import React from 'react'
import UserItem from '@/components/users/Item'
import styles from './index.module.scss'

const UserLists = () => (
  <div className={styles['Users']}>
    <UserItem />

    <UserItem />

    <UserItem />
  </div>
)

export default UserLists
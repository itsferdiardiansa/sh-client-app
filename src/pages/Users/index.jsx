import React from 'react'
import UserLists from '@/components/users/Lists'
import styles from './index.module.scss'

const Users = () => (
  <div className={styles['Container']}>
    <UserLists />
  </div>
)

export default Users
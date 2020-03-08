import React from 'react'
import UserLists from '@/components/users/Lists'
import styles from './index.module.scss'

const Users = ({ items }) => (
  <div className={styles['Users']}>
    <UserLists  
      items={items}
    />
  </div>
)

export default Users
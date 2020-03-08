import React from 'react'
import UserItem from '@/components/users/Item'
import styles from './index.module.scss'

const Users = ({ items }) => (
  <React.Fragment>
    {
      items.map((item, key) => (
        <UserItem key={key} {...item} />
      ))
    }
  </React.Fragment>
)

export default Users
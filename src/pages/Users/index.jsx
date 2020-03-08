import React from 'react'
import styles from './index.module.scss'
import UsersCollectionsContainer from '@containers/usersCollectionsContainer'

const UsersPage = () => (
  <div className={styles['Container']}>
    <UsersCollectionsContainer />
  </div>
)

export default UsersPage
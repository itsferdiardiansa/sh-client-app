import React, { Component } from 'react'
import Navigation from './Navigation'
import UserProfile from './UserProfile'
import styles from './index.module.scss'

const Header = () => (
  <div className={styles['Container']}>
    <div className={styles['Container__wrapper']}>

      <div className={styles['Right-menu']}>
        <Navigation />

        <UserProfile />
      </div>
    </div>
  </div>
)

export default Header
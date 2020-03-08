import React from 'react'
import styles from './index.module.scss'

const UserItem = () => (
  <div className={styles['Item']}>
    <div className={styles['Item__header']}>
      <h3>Ferdi Ardiansa</h3>
    </div>
    
    <div className={styles['Item__details']}>
      <div className={styles['Item__details-email']}>
        <label className={styles['Label']}>Email</label>

        <p className={styles['Value']}>Sincere@april.biz</p>
      </div>

      <div className={styles['Item__details-address']}>
        <label className={styles['Label']}>Address</label>

        <p className={styles['Value']}>Leanne Graham</p>
      </div>

      <div className={styles['Item__details-phone']}>
        <label className={styles['Label']}>Phone</label>

        <p className={styles['Value']}>021 - 8967362736</p>
      </div>

      <div className={styles['Item__details-websites']}>
        <label className={styles['Label']}>Websites</label>

        <p className={styles['Value']}>https://google.com</p>
      </div>
    </div>
  </div>
)

export default UserItem
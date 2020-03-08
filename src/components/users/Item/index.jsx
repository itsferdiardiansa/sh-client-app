import React from 'react'
import styles from './index.module.scss'

const UserItem = ({ name, email, phone, websites }) => (
  <div className={styles['Item']}>
    <div className={styles['Item__header']}>
      <h3>{name}</h3>
    </div>
    
    <div className={styles['Item__details']}>
      <div className={styles['Item__details-email']}>
        <label className={styles['Label']}>Email</label>

        <p className={styles['Value']}>{email}</p>
      </div>

      <div className={styles['Item__details-phone']}>
        <label className={styles['Label']}>Phone</label>

        <p className={styles['Value']}>{phone}</p>
      </div>

      <div className={styles['Item__details-websites']}>
        <label className={styles['Label']}>Websites</label>

        <p className={styles['Value']}>{websites}</p>
      </div>
    </div>
  </div>
)

export default UserItem
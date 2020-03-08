import React from 'react'
import { ReactComponent as AvatarIcon } from '@assets/images/avatar.svg'
import styles from './index.module.scss'

const ReplyItem = () => (
  <div className={styles['Comment']}>
    <div className={styles['Comment__user-picture']}>
      <AvatarIcon alt="User picture" />
    </div>

    <div className={styles['Comment__message']}>
      <div className={styles['Username']}>
        Ferdi Ardiansa
      </div>

      <div className={styles['Message']}>
        Coba kalian cek di YouTube..cari band LOVEBITES.. tapi jangan ngiler,liat penampilan mereka.. merasa minder apa gak dengan mereka
      </div>
    </div>
  </div>
)

export default ReplyItem
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'

const Navigation = () => (
  <React.Fragment>
    <div className={styles['User-about']}>
      <div className={styles['User-about__link']}>
        <Link to="/albums">Albums</Link>
      </div>

      <div className={styles['User-about__link']}>
        <Link to="/users">Users</Link>
      </div>
    </div>
  </React.Fragment>
)

export default Navigation
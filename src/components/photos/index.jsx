import React from 'react'
import PhotoLists from './Lists'
import styles from './index.module.scss'

const Photos = ({ items }) => (
  <div className={styles['Photos']}>
    <div className={styles['Photos__header']}>
      <h3>Photos</h3>
    </div>

    <div className={styles['Photos__content']}>
      <PhotoLists items={items} />
    </div>
  </div>
)

export default Photos
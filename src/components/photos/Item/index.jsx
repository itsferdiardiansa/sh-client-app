import React from 'react'
import styles from './index.module.scss'

const PhotoItem = ({ thumbnailUrl }) => (
  <div className={styles['Item']}>
    <div className={styles['Item__cover']}>
      <img src={thumbnailUrl} alt="Images" />
    </div>
  </div>
)

export default PhotoItem
import React from 'react'
import { ReactComponent as CoverIcon } from '@/assets/images/album.svg'
import styles from './index.module.scss'

const PhotoItem = () => (
  <div className={styles['Item']}>
    <div className={styles['Item__cover']}>
      <CoverIcon />
    </div>
  </div>
)

export default PhotoItem
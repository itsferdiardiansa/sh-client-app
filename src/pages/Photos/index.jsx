import React from 'react'
import Photos from '@/components/photos'
import styles from './index.module.scss'

const PhotosPage = () => (
  <div className={styles['Container']}>
    <Photos />
  </div>
)

export default PhotosPage
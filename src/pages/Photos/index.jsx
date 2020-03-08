import React from 'react'
import styles from './index.module.scss'
import PhotossCollectionsContainer from '@containers/photossCollectionsContainer'

const PhotosPage = () => (
  <div className={styles['Container']}>
    <PhotossCollectionsContainer />
  </div>
)

export default PhotosPage
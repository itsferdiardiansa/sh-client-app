import React from 'react'
import AlbumsCollectionsContainer from '@containers/albumsCollectionsContainer'
import styles from './index.module.scss'

const AlbumsPage = () => (
  <div className={styles['Container']}>
    <AlbumsCollectionsContainer />
  </div>
)

export default AlbumsPage
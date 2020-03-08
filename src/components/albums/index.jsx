import React from 'react'
import AlbumLists from '@/components/albums/Lists'
import styles from './index.module.scss'

const Albums = () => (
  <div className={styles['Albums']}>
    <div className={styles['Albums__header']}>
      <h3>Albums</h3>
    </div>

    <div className={styles['Albums__content']}>
      <AlbumLists />
    </div>
  </div>
)

export default Albums
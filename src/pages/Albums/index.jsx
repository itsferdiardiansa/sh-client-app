import React from 'react'
import Albums from '@/components/albums'
import styles from './index.module.scss'

const AlbumsPage = () => (
  <div className={styles['Container']}>
    <Albums />
  </div>
)

export default AlbumsPage
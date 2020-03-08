import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CoverIcon } from '@/assets/images/album.svg'
import styles from './index.module.scss'

const AlbumItem = ({ id, title }) => (
  <div className={styles['Item']} title={title}>
    <Link to={`/albums/${id}`} className={styles['Link']}></Link>
    
    <div className={styles['Item__cover']}>
      <CoverIcon />
    </div>
  </div>
)

export default AlbumItem
import React from 'react'
import styles from './index.module.scss'
import PostCollectionsContainer from '@containers/postCollectionsContainer'

const HomePage = () => (
  <div className={styles['Container']}>
    <PostCollectionsContainer />
  </div>
)

export default HomePage
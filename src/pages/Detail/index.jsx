import React from 'react'
import PostDetailCollectionsContainer from '@containers/postDetailCollectionsContainer'
import styles from './index.module.scss'

const DetailPage = () => (
  <div className={styles['Container']}>
    <PostDetailCollectionsContainer />
  </div>
)

export default DetailPage
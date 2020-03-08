import React, { useState } from 'react'
import ItemHeader from '@/components/posts/ItemHeader'
import ItemContent from '@/components/posts/ItemContent'
import Comments from '@/components/comments/Lists'
import styles from './index.module.scss'

const PostItem = () => {
  return(
    <div className={styles['Post']}>
      <ItemHeader />

      <ItemContent />

      <Comments />
    </div>
  )
}

export default PostItem
import React, { useState } from 'react'
import ItemHeader from '@/components/posts/ItemHeader'
import ItemContent from '@/components/posts/ItemContent'
import Comments from '@/components/comments'
import styles from './index.module.scss'

const PostItem = ({id, userId, title, body}) => {
  return(
    <div className={styles['Post']}>
      <ItemHeader 
        postId={id}
        title={title} 
      />

      <ItemContent 
        body={body} 
      />

      <Comments
        postId={id}
      />
    </div>
  )
}

export default PostItem
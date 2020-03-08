import React from 'react'
import PostItemForm from '@/components/posts/Form'
import styles from './index.module.scss'

const EditPost = () => (
  <div className={styles['Container']}>
    <PostItemForm />
  </div>
)

export default EditPost
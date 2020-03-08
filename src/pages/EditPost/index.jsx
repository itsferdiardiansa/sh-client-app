import React from 'react'
import PostItemForm from '@/components/posts/Form'
import styles from './index.module.scss'

const EditPage = () => (
  <div className={styles['Container']}>
    <PostItemForm />
  </div>
)

export default EditPage
import React from 'react'
import AddPost from '@/components/posts/Form'
import PostList from '@/components/posts/Lists'
import styles from './index.module.scss'

const Home = () => (
  <div className={styles['Container']}>
    {/* <div className={style['Add-post']}> */}
      <AddPost />
    {/* </div> */}
    
    <PostList />
  </div>
)

export default Home
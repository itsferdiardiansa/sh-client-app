import React from 'react'
import PostItem from '@/components/posts/Item'

const PostLists = () => (
  <React.Fragment>
    {
      [1,2,3].map((item, key) => (
        <PostItem key={key} />
      ))
    }
  </React.Fragment>
)

export default PostLists
import React from 'react'
import PostItem from '@/components/posts/Item'

const PostLists = ({items, ...otherProps}) => (
  <React.Fragment>
    {
      items.map((item, key) => (
        <PostItem 
          key={key}
          {...item} 
        />
      ))
    }
  </React.Fragment>
)

export default PostLists
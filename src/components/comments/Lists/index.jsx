import React from 'react'
import CommentItem from '@/components/comments/Item'

const CommentLists = () => (
  <React.Fragment>
    {
      [1,2,3].map((el, key) => (
        <CommentItem key={key} />
      ))
    }
  </React.Fragment>
) 

export default CommentLists
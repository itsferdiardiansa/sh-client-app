import React from 'react'
import CommentItem from '@/components/comments/Item'

const CommentLists = ({ comments }) => (
  <React.Fragment>
    {
      comments.map((item, key) => (
        <CommentItem key={key} {...item} />
      ))
    }
  </React.Fragment>
) 

export default CommentLists
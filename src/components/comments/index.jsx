import React, { useEffect, useState } from 'react'
import CommentLists from './Lists'
import styles from './index.module.scss'

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([])
  useEffect(() => {
    const getComments = async () => {
      try {
        const fetchComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`) 
        const response = await fetchComments.json()

        setComments(response)
      }catch(error) {

      }
    }
    getComments()
  }, [])

  return(
    <div className={styles['Comments']}>
      <div className={styles['Comment-lists']}>
        {
          (comments.length)
          ? <CommentLists comments={comments} />
          : 'Loading comments ...'
        }
      </div>
    </div>
  ) 
}

export default Comments
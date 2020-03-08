import React from 'react'
import PhotoItem from '@/components/photos/Item'

const PhotoLists = () => (
  <React.Fragment>
    {
      ([1, 2, 3, 4, 5, 6]).map((item, key) => (
        <PhotoItem key={key} />
      ))
    }
  </React.Fragment>
)

export default PhotoLists
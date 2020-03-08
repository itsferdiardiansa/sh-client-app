import React from 'react'
import PhotoItem from '@/components/photos/Item'

const PhotoLists = ({ items }) => (
  <React.Fragment>
    {
      items.map((item, key) => (
        <PhotoItem key={key} {...item} />
      ))
    }
  </React.Fragment>
)

export default PhotoLists
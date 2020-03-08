import React from 'react'
import AlbumItem from '@/components/albums/Item'

const AlbumLists = ({ items }) => {
  console.log(items)
  
  return(
    <React.Fragment>
      {
        items.map((item, key) => (
          <AlbumItem key={key} {...item} />
        ))
      }
    </React.Fragment>
  )
}

export default AlbumLists
import React from 'react'
import AlbumItem from '@/components/albums/Item'

const AlbumLists = () => (
  <React.Fragment>
    {
      ([1, 2, 3, 4, 5, 6]).map((item, key) => (
        <AlbumItem key={key} />
      ))
    }
  </React.Fragment>
)

export default AlbumLists
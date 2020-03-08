import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRequest } from '@store/albums/actions'
import Albums from '@/components/albums'

class AlbumsCollectionContainer extends Component {
  componentDidMount() {
    const { getAlbums } = this.props
    
    getAlbums()
  }

  render() {
    const { albums } = this.props

    return(
      <React.Fragment>
        {
          (albums.isFetching !== null && !albums.isFetching)
          ? <Albums items={albums.response} />
          : 'Loading ...'
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  albums: state.albums
})

const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(fetchRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsCollectionContainer)
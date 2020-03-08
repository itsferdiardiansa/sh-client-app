import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchRequest } from '@store/photos/actions'
import Photos from '@/components/photos'

class PhotosCollectionContainer extends Component {
  componentDidMount() {
    const { getPhotos, match: {params} } = this.props
    
    console.log(this)
    getPhotos(params)
  }

  render() {
    const { photos } = this.props

    return(
      <React.Fragment>
        {
          (photos.isFetching !== null && !photos.isFetching)
          ? <Photos items={photos.response} />
          : 'Loading ...'
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  photos: state.photos
})

const mapDispatchToProps = dispatch => ({
  getPhotos: (params) => dispatch(fetchRequest(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PhotosCollectionContainer))
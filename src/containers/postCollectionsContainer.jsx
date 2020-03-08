import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRequest } from '@store/post/actions'
import Post from '@/components/posts'

class PostCollectionContainer extends Component {
  componentDidMount() {
    const { getPost } = this.props
    
    getPost()
  }

  render() {
    const { postData } = this.props

    return(
      <Post 
        {...postData}
      />
    )
  }
}

const mapStateToProps = state => ({
  postData: state.post
})

const mapDispatchToProps = dispatch => ({
  getPost: () => dispatch(fetchRequest({postId: undefined}))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostCollectionContainer)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchRequest } from '@store/post/actions'
import PostItem from '@/components/posts/Item'

class PostDetailCollectionContainer extends Component {
  componentDidMount() {
    const { getPost, match: { params } } = this.props
    
    getPost(params)
  }

  render() {
    const { postData } = this.props
    
    return(
      <React.Fragment>
        {
          (!postData.isFetching)
          ? <PostItem {...postData.response} />
          : null 
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  postData: state.post
})

const mapDispatchToProps = dispatch => ({
  getPost: (params) => dispatch(fetchRequest(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostDetailCollectionContainer))
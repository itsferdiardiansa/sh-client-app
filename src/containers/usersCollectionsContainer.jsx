import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRequest } from '@store/users/actions'
import Users from '@/components/users'

class UsersCollectionContainer extends Component {
  componentDidMount() {
    const { getUsers } = this.props
    
    getUsers()
  }

  render() {
    const { users } = this.props

    console.log(users)
    return(
      <React.Fragment>
        {
          (users.isFetching !== null && !users.isFetching)
          ? <Users items={users.response} />
          : null
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(fetchRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersCollectionContainer)
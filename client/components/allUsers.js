import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchAllUsers} from '../store/user.js'

const AllUsers = props => {
  const {users, getUsers} = props

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      {/* {isAdmin ? ( )} */}
      <h1>All Users</h1>
      <tbody>
        {users.length !== 0
          ? users.map(user => (
              <tr key={user.id}>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.isAdmin}</td>
              </tr>
            ))
          : 'No Users on Database'}
      </tbody>
    </div>
  )
}

//CONTAINER

const mapStateToProps = state => {
  return {
    users: state.users.all,
    isAdmin: state.users.selected.isAdmin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(fetchAllUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)

//PROP TYPES
AllUsers.propTypes = {
  isAdmin: PropTypes.bool.isRequired
}

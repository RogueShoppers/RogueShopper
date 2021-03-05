import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchAllUsers} from '../store/user.js'

const AllUsers = props => {
  const {users, getUsers} = props

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <h1>All Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Admin Status</th>
          </tr>
        </thead>
        <tbody>
          {users.length !== 0 &&
            users.map(user => (
              <tr key={user.id}>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{String(user.isAdmin)}</td>
              </tr>
            ))}
        </tbody>
      </table>
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

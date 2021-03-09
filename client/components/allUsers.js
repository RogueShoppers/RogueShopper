import React, {useEffect} from 'react'
import {usePagination} from 'react-use-pagination'
import {connect} from 'react-redux'
import {fetchAllUsers} from '../store/user.js'
import {editMe} from '../store/user'

const AllUsers = props => {
  const {users, getUsers} = props

  useEffect(
    () => {
      getUsers()
    },
    [users.length]
  )

  // const [users] = useState([])
  const {
    startIndex,
    endIndex,
    setPreviousPage,
    totalPages,
    currentPage,
    setNextPage,
    nextEnabled,
    previousEnabled
  } = usePagination({
    totalItems: users.length,
    initialPageSize: 1
  })

  console.log(
    users,
    users.slice(startIndex, endIndex).map(user => {
      return user.id
    })
  )

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
                <td>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button onClick={setPreviousPage} disabled={!previousEnabled}>
        Previous Page
      </button>
      <span>
        Current Page: {currentPage} of {totalPages}
      </span>
      <button onClick={setNextPage} disabled={!nextEnabled}>
        Next Page
      </button>
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
    getUsers: () => dispatch(fetchAllUsers()),
    editMe: user => dispatch(editMe(user, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)

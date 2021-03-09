import React, {useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate'
import {connect} from 'react-redux'
import {fetchAllUsers} from '../store/user.js'
import {editMe} from '../store/user'

const AllUsers = props => {
  const {users, getUsers} = props
  const [offset, setOffset] = useState(0)
  const [perPage] = useState(10)

  useEffect(
    () => {
      getUsers()
    },
    [offset]
  )

  const handlePageClick = event => {
    const selectedPage = event.selected
    setOffset(selectedPage + 1)
  }

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
            users.slice(offset, offset + perPage).map(user => (
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
      <ReactPaginate
        previousLabel="prev"
        nextLabel="next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={Math.ceil(users.length / perPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="center pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
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

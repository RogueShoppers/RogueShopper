import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {editUser} from '../../store/user'

const EditUser = props => {
  const selectedUser = props.location.state.selectedUser
  let [user, setUser] = useState([])

  useEffect(
    () => {
      setUser(user)
    },
    [setUser]
  )

  const handleChange = event => {
    user = {id: selectedUser.id, [event.target.name]: event.target.value}
  }

  setUser = user => {
    return user.map(u => {
      return (
        u.firstName, u.lastName, u.preferredName, u.email, u.address, u.isAdmin
      )
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    editUser({...user})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          name="firstName"
          onChange={handleChange}
          defaultValue={selectedUser.firstName}
        />

        <label>Last Name:</label>
        <input
          name="lastName"
          onChange={handleChange}
          defaultValue={selectedUser.lastName}
        />

        <label>Preferred Name:</label>
        <input
          name="preferredName"
          onChange={handleChange}
          defaultValue={selectedUser.preferredName}
        />

        <label>Email:</label>
        <input
          name="email"
          onChange={handleChange}
          defaultValue={selectedUser.email}
        />

        <label>Address:</label>
        <input
          name="address"
          onChange={handleChange}
          defaultValue={selectedUser.address}
        />

        <label>Admin Status:</label>
        <input
          name="isAdmin"
          onChange={handleChange}
          defaultValue={String(selectedUser.isAdmin)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

const mapState = state => {
  return {
    selectedUser: state.users.selected,
    setUser: state.users.selected
  }
}

const mapDispatch = dispatch => {
  return {
    editUser: user => dispatch(editUser(user))
  }
}

export default connect(mapState, mapDispatch)(EditUser)

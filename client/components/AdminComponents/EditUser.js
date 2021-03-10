import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {editMe} from '../../store/user'

const EditUser = props => {
  const {selectedUser} = props.location.state
  const [setUser] = useState(null)
  //   console.log( 'props', selectedUser)

  useEffect(() => {
    editMe()
  }, [])

  useEffect(
    () => {
      //   handleChange().setUser()

      //    const handleChange = (event) => {
      //         setUser({product: ({
      //             [event.target.name]: event.target.defaultValue
      //           })})
      //         }
      //         console.log('product in handle change', setUser)
      //         return handleChange
      console.log('inside handle change useEffect', setUser)
    },
    [setUser]
  )

  const handleChange = event => {
    return {[event.target.name]: event.target.value}
  }

  const handleSubmit = event => {
    event.preventDefault()
    editUser({...selectedUser})
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
    selectedUser: state.user,
    setUser: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    editUser: user => dispatch(editMe(user))
  }
}

export default connect(mapState, mapDispatch)(EditUser)

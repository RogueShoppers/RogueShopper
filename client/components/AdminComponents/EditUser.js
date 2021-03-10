import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {editMe} from '../../store/user'

const EditUser = props => {
  const {selectedUser} = props.location.state
  let [user, setUser] = useState([])


  useEffect(() => {
    editMe()
  }, [])

  useEffect(
    () => {
      setUser(user)
    },
    [setUser]
  )

  const handleChange = event => {
    user = {id: selectedUser.id, [event.target.name]: event.target.value}
    console.log(user)
    
  }

  setUser = ((user) => {
    user.map(u => {
    {
      u.firstName,
      u.lastName,
      u.preferredName,
      u.email,
      u.address,
      u.isAdmin
    }
  }
)
})
  

  const handleSubmit = event => {
    event.preventDefault()
    editMe({...user})
    console.log('submit sent', {...user})
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
    editMe: user => dispatch(editMe(user))
  }
}

export default connect(mapState, mapDispatch)(EditUser)

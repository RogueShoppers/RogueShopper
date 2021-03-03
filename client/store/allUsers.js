import axios from 'axios'

//ACTION TYPES
const SET_USERS = 'SET_USERS'

//ACTION CREATOR
export const setUsers = users => ({
  type: SET_USERS,
  users
})

//THUNKS
export const fetchAllUsers = () => {
  return async dispatch => {
    try {
      const {data: users} = await axios.get('/api/users')
      dispatch(setUsers(users))
    } catch (error) {
      console.log('Error: Could not get all users', error)
    }
  }
}

//INITIAL STATE
const initialState = {
  all: []
}

//REDUCER
export default function allUsersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {...state, all: action.users}
    default:
      return state
  }
}

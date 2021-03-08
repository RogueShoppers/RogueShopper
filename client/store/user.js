import axios from 'axios'
import historyFunc from '../history'

//ACTION TYPES
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const SIGNUP_USER = 'SIGNUP_USER'
const LOGIN_USER = 'LOGIN_USER'
const EDIT_USER = 'EDIT_USER'
const SET_USERS = 'SET_USERS'
const SET_ERROR = 'SET_ERROR'
const CLEAR_ERROR = 'CLEAR_ERROR'

//ACTION CREATORS
export const gotUser = user => ({type: GET_USER, user})
export const removeUser = () => ({type: REMOVE_USER})
export const signedUp = newUser => ({type: SIGNUP_USER, newUser})
export const loggedIn = user => ({type: LOGIN_USER, user})
export const updatedUser = user => ({type: EDIT_USER, user})
export const setUsers = users => ({type: SET_USERS, users})
export const handleError = error => ({type: SET_ERROR, error})
export const clearError = () => ({type: CLEAR_ERROR})

//THUNK CREATORS
export const signUp = newUser => {
  return async dispatch => {
    try {
      const {data: created} = await axios.post('/auth/signup', newUser)
      dispatch(signedUp(created))
      historyFunc.push('/')
    } catch (error) {
      dispatch(handleError(error.response))
      setTimeout(() => dispatch(clearError()), 3000)
      console.log('Error creating a new user!', error)
    }
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.delete('/auth/logout')
    dispatch(removeUser())
    historyFunc.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const logIn = user => {
  return async dispatch => {
    try {
      const {data: signedInUser} = await axios.put('/auth/login', user)
      dispatch(loggedIn(signedInUser))
      historyFunc.push('/home')
    } catch (error) {
      dispatch(handleError(error.response))
      setTimeout(() => dispatch(clearError()), 3000)
      console.log('Error logging in!', error)
    }
  }
}

export const getMe = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/auth/me')
      dispatch(gotUser(res.data))
    } catch (error) {
      console.log('Error fetching logged-in user!', error)
    }
  }
}

export const editMe = user => {
  return async dispatch => {
    try {
      const {data: updated} = await axios.put('/auth/me', user)
      dispatch(updatedUser(updated))
      historyFunc.push('/me')
    } catch (error) {
      console.log('Error editing logged-in user!', error)
    }
  }
}

export const fetchAllUsers = () => {
  console.log('inside fetch all users')
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
  all: [],
  selected: {},
  error: {}
}

//REDUCER
// eslint-disable-next-line complexity
export default function(state = initialState, action) {
  console.log(
    'inside users reducer',
    'action is: ',
    action,
    'state is: ',
    state
  )
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        selected: action.user
      }
    case EDIT_USER:
      return {
        ...state,
        selected:
          state.selected.id === action.user.id ? action.user : state.selected
      }
    case SIGNUP_USER:
      return {
        ...state,
        selected: action.newUser
      }
    case LOGIN_USER:
      return {
        ...state,
        selected: action.user
      }
    case REMOVE_USER:
      return {
        ...state,
        selected: {}
      }
    case SET_USERS:
      return {...state, all: action.users}
    case SET_ERROR:
      return {...state, error: action.error}
    case CLEAR_ERROR:
      return {...state, error: {}}
    default:
      return state
  }
}

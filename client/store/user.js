import axios from 'axios'
import historyFunc from '../history'

//ACTION TYPES
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const SIGNUP_USER = 'SIGNUP_USER'
const LOGIN_USER = 'LOGIN_USER'

//ACTION CREATORS
const gotUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const signedUp = newUser => ({type: SIGNUP_USER, newUser})
const loggedIn = user => ({type: LOGIN_USER, user})

//THUNK CREATORS
export const signUp = newUser => {
  return async dispatch => {
    try {
      const {data: created} = await axios.post('/auth/signup', newUser)
      dispatch(signedUp(created))
      historyFunc.push('/')
    } catch (error) {
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
      historyFunc.push('/')
    } catch (error) {
      console.log('Error logging in!', error)
    }
  }
}

export const getMe = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/auth/me')
      console.log('res inside getMe thunk-->', res)

      dispatch(gotUser(res.data))
    } catch (error) {
      console.log('Error fetching logged-in user!', error)
    }
  }
}

//INITIAL STATE
const initialState = {
  all: [],
  selected: {}
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        selected: action.user
      }
    case SIGNUP_USER:
      return {
        ...state,
        selected: action.newUser
      }
    case LOGIN_USER:
      console.log('action.user', action.user)
      return {
        ...state,
        selected: action.user
      }
    case REMOVE_USER:
      return {
        ...state,
        selected: {}
      }
    default:
      return state
  }
}

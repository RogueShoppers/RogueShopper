import axios from 'axios'
import historyFunc from '../history'

//ACTION TYPES
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

const SIGNUP_USER = 'SIGNUP_USER'
const LOGIN_USER = 'LOGIN_USER'
const GET_ALL_USERS = 'GET_ALL_USERS'

//ACTION CREATORS
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const signedUp = newUser => ({type: SIGNUP_USER, newUser})
const loggedIn = user => ({type: LOGIN_USER, user})
const gotAllUsers = users => ({type: GET_ALL_USERS, users})

//THUNK CREATORS
export const signUp = newUser => {
  // console.log('newUser', newUser)
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
  console.log('user in logIn thunk', user)

  return async dispatch => {
    try {
      console.log('inside try')
      const {data: signedInUser} = await axios.put('/auth/login', user)
      console.log('signedInUser', signedInUser)
      dispatch(loggedIn(signedInUser))
      historyFunc.push('/')
    } catch (error) {
      console.log('Error logging in!', error)
    }
  }
}

export const getAllUsers = () => {
  return async dispatch => {
    try {
      const {data: users} = await axios.get('/api/users')
      dispatch(getAllUsers(users))
    } catch (error) {
      console.log('Error fetching all users!')
    }
  }
}

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data))
  } catch (err) {
    console.error(err)
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
    case GET_ALL_USERS:
      return {
        ...state,
        all: action.users
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

//Original BoilerMaker Code
// export const auth = (email, password, method) => async dispatch => {
//   let res
//   try {
//     res = await axios.post(`/auth/${method}`, {email, password})
//   } catch (authError) {
//     return dispatch(getUser({error: authError}))
//   }

//   try {
//     dispatch(getUser(res.data))
//     history.push('/home')
//   } catch (dispatchOrHistoryErr) {
//     console.error(dispatchOrHistoryErr)
//   }
// }

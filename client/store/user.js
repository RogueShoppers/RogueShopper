import axios from 'axios'
import history from '../history'

//ACTION TYPES
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

const SIGNUP_USER = 'SIGNUP_USER'
const LOGIN_USER = 'LOGIN_USER'

//ACTION CREATORS
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

const signedUp = newUser => {
  return {
    type: SIGNUP_USER,
    newUser
  }
}

const loggedin = user => {
  return {
    type: LOGIN_USER,
    user
  }
}

//THUNK CREATORS
// export const me = () => async (dispatch) => {
//   try {
//     const res = await axios.get('/auth/me')
//     dispatch(getUser(res.data || defaultUser))
//   } catch (err) {
//     console.error(err)
//   }
// }

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

export const signUp = (newUser, history) => {
  return async dispatch => {
    try {
      const {data: created} = await axios.post('/auth/signup', newUser)
      dispatch(signedUp(created))
      history.push('/')
    } catch (error) {
      console.log('Error creating a new user!')
    }
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

//INITIAL STATE
const initialState = {
  all: []
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return state
    case SIGNUP_USER:
      return {
        ...state,
        all: [...state, action.newUser]
      }
    default:
      return state
  }
}

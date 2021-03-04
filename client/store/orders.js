import axios from 'axios'

//ACTION TYPES
const SET_OPEN_ORDER = 'SET_OPEN_ORDER'
const CREATE_ORDER = 'CREATE_ORDER'

//ACTION CREATOR
export const setOpenOrder = openOrder => {
  return {
    type: SET_OPEN_ORDER,
    openOrder
  }
}
export const createNewOrder = newOrder => ({
  type: CREATE_ORDER,
  newOrder
})

//THUNKS
export const fetchMyOpenOrder = userId => {
  return async dispatch => {
    try {
      const {data: openOrder} = await axios.get(
        `/api/orders/${userId}?status=open`
      )
      dispatch(setOpenOrder(openOrder))
    } catch (error) {
      console.log('Error: Could not get my order details', error)
    }
  }
}
export const createNewOpenOrder = (userId, orderInfo, history) => {
  return async dispatch => {
    try {
      const {data: newOrder} = await axios.post(
        `/api/orders/${userId}`,
        orderInfo
      )
      dispatch(createNewOrder(newOrder))
      history.push('/mycart')
    } catch (error) {
      console.log('Error: Could not add new order to database', error)
    }
  }
}

//INITIAL STATE
const initialState = {
  all: [],
  openOrder: {}
}

//REDUCER
export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_OPEN_ORDER:
      return {...state, openOrder: action.openOrder}
    case CREATE_ORDER:
      return {...state, all: [...state.all, action.newOrder]}
    default:
      return state
  }
}

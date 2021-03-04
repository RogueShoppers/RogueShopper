import axios from 'axios'

//ACTION TYPES
const SET_OPEN_ORDERS = 'SET_OPEN_ORDERS'
const CREATE_ORDER = 'CREATE_ORDER'

//ACTION CREATOR
export const setOpenOrders = orders => {
  return {
    type: SET_OPEN_ORDERS,
    orders
  }
}
export const createNewOrder = newOrder => ({
  type: CREATE_ORDER,
  newOrder
})

//THUNKS
export const fetchMyOpenOrders = userId => {
  return async dispatch => {
    try {
      const {data: orders} = await axios.get(
        `/api/orders/${userId}?status=open`
      )
      dispatch(setOpenOrders(orders))
    } catch (error) {
      console.log('Error: Could not get my order details', error)
    }
  }
}
export const createNewOpenOrder = (userId, orderInfo) => {
  return async dispatch => {
    try {
      console.log('(THUNK) UserId', userId)
      console.log('(THUNK orderInfo', orderInfo)
      const {data: newOrder} = await axios.post(
        `/api/orders/${userId}`,
        orderInfo
      )
      dispatch(createNewOrder(newOrder))
    } catch (error) {
      console.log('Error: Could not add new order to database', error)
    }
  }
}

//INITIAL STATE
const initialState = {
  all: [],
  selected: {}
}

//REDUCER
export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_OPEN_ORDERS:
      return {...state, all: action.orders}
    case CREATE_ORDER:
      return {...state, all: [...state.all, action.newOrder]}
    default:
      return state
  }
}

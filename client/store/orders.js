import axios from 'axios'

//ACTION TYPES
const SET_ORDERS = 'SET_ORDERS'
const CREATE_ORDER = 'CREATE_ORDER'

//ACTION CREATOR
export const setOrders = orders => {
  return {
    type: SET_ORDERS,
    orders
  }
}
export const createNewOrder = newOrder => ({
  type: CREATE_ORDER,
  newOrder
})

//THUNKS
export const fetchAllOrders = () => {
  return async dispatch => {
    try {
      const {data: orders} = await axios.get('/api/orders')
      dispatch(setOrders(orders))
    } catch (error) {
      console.log('Error: Could not get all orders', error)
    }
  }
}
export const postNewOrder = () => {
  return async dispatch => {
    try {
      const {data: order} = await axios.post('/api/orders')
      dispatch(createNewOrder(order))
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
    case SET_ORDERS:
      return {...state, all: action.orders}
    case CREATE_ORDER:
      return {...state, all: [...state.all, action.order]}
    default:
      return state
  }
}

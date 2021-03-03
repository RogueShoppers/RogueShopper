import axios from 'axios'

//ACTION TYPES
const SET_CART_ORDERS = 'SET_CART_ORDERS'
const CREATE_ORDER = 'CREATE_ORDER'

//ACTION CREATOR
export const setOpenOrders = orders => {
  return {
    type: SET_CART_ORDERS,
    orders
  }
}
export const createNewOrder = newOrder => ({
  type: CREATE_ORDER,
  newOrder
})

//THUNKS
export const fetchAllOpenOrders = () => {
  return async dispatch => {
    try {
      const {data: orders} = await axios.get('/api/orders?status=open')
      console.log('ORDERS', orders)
      dispatch(setOpenOrders(orders))
    } catch (error) {
      console.log('Error: Could not get all orders', error)
    }
  }
}
export const postNewOrder = newOrder => {
  return async dispatch => {
    try {
      const {data: order} = await axios.post('/api/orders', newOrder)
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
    case SET_CART_ORDERS:
      return {...state, all: action.orders}
    case CREATE_ORDER:
      return {...state, all: [...state.all, action.order]}
    default:
      return state
  }
}

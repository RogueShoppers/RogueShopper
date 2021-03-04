import axios from 'axios'

//ACTION TYPES
const SET_OPEN_ORDERS = 'SET_OPEN_ORDERS'
const CREATE_ORDER = 'CREATE_ORDER'

//ACTION CREATOR
export const setOpenOrders = order => {
  return {
    type: SET_OPEN_ORDERS,
    order
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
      const {data: order} = await axios.get('/api/orders?status=open')
      console.log('ORDERS', order)
      dispatch(setOpenOrders(order))
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
    case SET_OPEN_ORDERS:
      return {...state, selected: action.order}
    case CREATE_ORDER:
      return {...state, all: [...state.all, action.order]}
    default:
      return state
  }
}

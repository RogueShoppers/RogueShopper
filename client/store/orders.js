import axios from 'axios'

//ACTION TYPES
const SET_OPEN_ORDER = 'SET_OPEN_ORDER'
const CREATE_ORDER = 'CREATE_ORDER'
const REMOVE_ITEM = 'REMOVE_ITEM'
const EDIT_QUANTITY = 'EDIT_QUANTITY'
const CLOSE_ORDER = 'CLOSE_ORDER'

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

export const removeItem = updatedOpenOrder => {
  return {
    type: REMOVE_ITEM,
    updatedOpenOrder
  }
}
export const editQuantity = updatedOpenOrder => {
  return {
    type: EDIT_QUANTITY,
    updatedOpenOrder
  }
}

export const closeOrder = myClosedOrder => ({
  type: CLOSE_ORDER,
  myClosedOrder
})

//THUNKS
export const fetchMyOpenOrder = () => {
  return async dispatch => {
    try {
      const {data: openOrder} = await axios.get(`/api/orders/?status=open`)
      dispatch(setOpenOrder(openOrder))
    } catch (error) {
      console.log('Error: Could not get my order details', error)
    }
  }
}
export const createNewOpenOrder = (orderInfo, history) => {
  return async dispatch => {
    try {
      const {data: newOrder} = await axios.post(`/api/orders`, orderInfo)
      dispatch(createNewOrder(newOrder))
      history.push('/mycart')
    } catch (error) {
      console.log('Error: Could not add new order to database', error)
    }
  }
}

export const removeItemFromOrder = productId => {
  return async dispatch => {
    try {
      const {data: updatedOpenOrder} = await axios.delete(
        `/api/orders/products/${productId}`
      )
      dispatch(removeItem(updatedOpenOrder))
    } catch (error) {
      console.log('Error removing product from cart!', error)
    }
  }
}

export const editCartQuantity = orderInfo => {
  return async dispatch => {
    try {
      const {data: updatedOpenOrder} = await axios.put(`/api/orders`, orderInfo)
      dispatch(editQuantity(updatedOpenOrder))
    } catch (error) {
      console.log('Error: Could not update quantity in database', error)
    }
  }
}

export const closeOpenOrder = (myOrder, history) => {
  return async dispatch => {
    try {
      const {data: closedOrder} = await axios.put(`/api/orders/${myOrder.id}`)
      dispatch(closeOrder(closedOrder))
      history.push('/confirmation')
    } catch (error) {
      console.log('Error: Could not close order', error)
    }
  }
}

//INITIAL STATE
const initialState = {
  myOpenOrder: {},
  myClosedOrder: {}
}

//REDUCER
export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_OPEN_ORDER:
      return {...state, myOpenOrder: action.openOrder}
    case CREATE_ORDER:
      return {
        ...state,
        myOpenOrder: action.newOrder
      }
    case REMOVE_ITEM:
      return {
        ...state,
        myOpenOrder: action.updatedOpenOrder
      }
    case EDIT_QUANTITY:
      return {
        ...state,
        myOpenOrder: action.updatedOpenOrder
      }
    case CLOSE_ORDER:
      return {
        ...state,
        myClosedOrder: action.myClosedOrder
      }
    default:
      return state
  }
}

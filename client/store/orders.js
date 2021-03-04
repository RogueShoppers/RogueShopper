import axios from 'axios'

//ACTION TYPES
const SET_OPEN_ORDER = 'SET_OPEN_ORDER'
const CREATE_ORDER = 'CREATE_ORDER'
const REMOVE_ITEM = 'REMOVE_ITEM'
const EDIT_QUANTITY = 'EDIT_QUANTITY'

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

export const removeItemFromOrder = (userId, productId) => {
  return async dispatch => {
    try {
      const {data: updatedOpenOrder} = await axios.delete(
        `/api/orders/${userId}/products/${productId}`
      )
      dispatch(removeItem(updatedOpenOrder))
    } catch (error) {
      console.log('Error removing product from cart!', error)
    }
  }
}

export const editCartQuantity = (userId, orderInfo) => {
  return async dispatch => {
    try {
      const {data: updatedOpenOrder} = await axios.put(
        `/api/orders/${userId}`,
        orderInfo
      )
      dispatch(editQuantity(updatedOpenOrder))
    } catch (error) {
      console.log('Error: Could not update quantity in database')
    }
  }
}

//INITIAL STATE
const initialState = {
  all: [],
  myOrder: {}
}

//REDUCER
export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_OPEN_ORDER:
      return {...state, myOrder: action.openOrder}
    case CREATE_ORDER:
      return {
        ...state,
        all: [...state.all, action.newOrder],
        myOrder: action.newOrder
      }
    case REMOVE_ITEM:
      return {
        ...state,
        all: state.all.map(
          order =>
            order.id === action.updatedOpenOrder.id
              ? action.updatedOpenOrder
              : order
        ),
        myOrder: action.updatedOpenOrder
      }
    case EDIT_QUANTITY:
      return {
        ...state,
        all: state.all.map(
          order =>
            order.id === action.updatedOpenOrder.id
              ? action.updatedOpenOrder
              : order
        ),
        myOrder: action.updatedOpenOrder
      }
    default:
      return state
  }
}

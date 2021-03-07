import axios from 'axios'

//ACTION TYPES
const SET_OPEN_ORDER = 'SET_OPEN_ORDER'
const CREATE_ORDER = 'CREATE_ORDER'
const REMOVE_ITEM = 'REMOVE_ITEM'
const EDIT_QUANTITY = 'EDIT_QUANTITY'
const CLOSE_ORDER = 'CLOSE_ORDER'
const SET_COMPLETE_ORDER = 'SET_COMPLETE_ORDER'
// const SET_SINGLE_ORDER = 'SET_SINGLE_ORDER'
const SET_ORDER_ERROR = 'SET_ORDER_ERROR'
const CLEAR_ORDER_ERROR = 'CLEAR_ORDER_ERROR'

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

export const setCompleteOrder = completedOrder => {
  return {
    type: SET_COMPLETE_ORDER,
    completedOrder
  }
}
export const setOrderError = error => {
  return {
    type: SET_ORDER_ERROR,
    error
  }
}
export const clearOrderError = () => {
  return {
    type: CLEAR_ORDER_ERROR
  }
}

// export const setSingleOrder = (order) => {
//   return {
//     type: SET_SINGLE_ORDER,
//     order,
//   }
// }

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
      dispatch(setOrderError(error.response))
      setTimeout(() => dispatch(clearOrderError()), 5000)
      console.log('Error: Could not close order', error)
    }
  }
}

export const fetchMyCompletedOrder = () => {
  return async dispatch => {
    try {
      const {data: completedOrder} = await axios.get(
        `/api/orders/?status=close`
      )
      dispatch(setCompleteOrder(completedOrder))
    } catch (error) {
      console.log('Error: Could not get my completed order details', error)
    }
  }
}

// export const fetchSingleOrder = (orderId) => {
//   return async (dispatch) => {
//     try {
//       const {data: order} = await axios.get(`/api/orders/${orderId}`)
//       dispatch(setSingleOrder(order))
//     } catch (error) {
//       console.log('Error: Could not get the single order data!', error)
//     }
//   }
// }
//INITIAL STATE
const initialState = {
  myOpenOrder: {},
  myClosedOrder: {},
  allClosedOrders: [],
  orderError: {}
}

//REDUCER
// eslint-disable-next-line complexity
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
    case SET_COMPLETE_ORDER:
      return {...state, allClosedOrders: action.completedOrder}
    // case SET_SINGLE_ORDER:
    //   return {...state, myClosedOrder: action.order}
    case SET_ORDER_ERROR:
      return {...state, orderError: action.error}
    case CLEAR_ORDER_ERROR:
      return {...state, orderError: {}}
    default:
      return state
  }
}

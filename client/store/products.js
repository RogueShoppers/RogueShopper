import axios from 'axios'

//ACTION TYPES
const SET_PRODUCTS = 'SET_PRODUCTS'

//ACTION CREATOR
export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})

//THUNKS

//INITIAL STATE
const initialState = {
  products: []
}

//REDUCER
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, products: action.products}
    default:
      return state
  }
}

import axios from 'axios'

//ACTION TYPES
const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT'

//ACTION CREATOR
export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})
export const setSingleProduct = product => ({
  type: SET_SINGLE_PRODUCT,
  product
})

//THUNKS
export const fetchAllProducts = () => {
  return async dispatch => {
    try {
      const {data: products} = await axios.get('/api/products')
      dispatch(setProducts(products))
    } catch (error) {
      console.log('Error: Could not get all products', error)
    }
  }
}
export const fetchSingleProducts = id => {
  return async dispatch => {
    try {
      const {data: product} = await axios.get(`/api/products/${id}`)
      dispatch(setSingleProduct(product))
    } catch (error) {
      console.log('Error: Could not get single product', error)
    }
  }
}

//INITIAL STATE
const initialState = {
  all: [],
  selected: {}
}

//REDUCER
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, all: action.products}
    case SET_SINGLE_PRODUCT:
      return {...state, selected: action.product}
    default:
      return state
  }
}

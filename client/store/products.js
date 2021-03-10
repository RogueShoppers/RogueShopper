import axios from 'axios'

//ACTION TYPES
const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT'
const FILTER_PRODUCTS = 'FILTER_PRODUCTS'
const EDIT_PRODUCT = 'EDIT_PRODUCT'
const TOGGLE_EDIT = 'TOGGLE_EDIT'
const SET_FILTER = 'SET_FILTER'

//ACTION CREATOR
export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})
export const setSingleProduct = product => ({
  type: SET_SINGLE_PRODUCT,
  product
})
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
})
export const _editProduct = productId => ({
  type: EDIT_PRODUCT,
  selected: productId,
  isEditing: false
})

export const _toggleEdit = () => ({
  type: TOGGLE_EDIT,
  isEditing: true
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
export const fetchSingleProduct = id => {
  return async dispatch => {
    try {
      const {data: product} = await axios.get(`/api/products/${id}`)
      dispatch(setSingleProduct(product))
    } catch (error) {
      console.log('Error: Could not get single product', error)
    }
  }
}

export const editProduct = productId => {
  const id = productId
  return async dispatch => {
    try {
      const {data: editedProduct} = await axios.put(`/api/products/${id}`)
      dispatch(_editProduct(editedProduct))
    } catch (error) {
      console.log('Error: Could not edit selected product', error)
    }
  }
}

// export const filterAllProducts = (products, toyType) => {
//   return dispatch => {
//     payload: {
//       toyType,
//       filteredProducts:
//         toyType === ''
//           ? products
//           : products.filter(product => product.type === toyType)
//     }
//     dispatch(filteredAllProducts())
//   }
// }

//INITIAL STATE
const initialState = {
  all: [],
  selected: {},
  isEditing: false,
  filter: ''
}

//REDUCER
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, all: action.products}
    case SET_SINGLE_PRODUCT:
      return {...state, selected: action.product}
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter
      }
    case EDIT_PRODUCT:
      return {...state, selected: action.product, isEditing: action.isEditing}
    case TOGGLE_EDIT:
      return {...state, isEditing: action.isEditing}
    default:
      return state
  }
}

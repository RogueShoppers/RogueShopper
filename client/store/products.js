import axios from 'axios'

//ACTION TYPES
const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT'
const FILTER_PRODUCTS = 'FILTER_PRODUCTS'
// const ADD_FILTER = 'ADD_FILTER'

//ACTION CREATOR
export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})
export const setSingleProduct = product => ({
  type: SET_SINGLE_PRODUCT,
  product
})
// export const filteredProducts = (filteredProduct) => ({
//   type: FILTER_PRODUCTS,
//   filteredProduct,
// })

// export const addFilter = (filter) => ({
//   type: ADD_FILTER,
//   filter,
// })

export const filterProducts = (products, toyType) => dispatch => {
  dispatch({
    type: FILTER_PRODUCTS,
    payload: {
      toyType,
      items:
        toyType === ''
          ? products
          : products.filter(product => product.tags.indexOf(toyType) >= 0)
    }
  })
}

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
// export const filterProducts = (toyType) => {
//   return async (dispatch) => {
//     try {
//       const {data: items} = await axios.get('/api/products')
//       console.log('items inside filterProducts-->', items)
//       if(toyType === '')
//       // const filteredItems =
//       // toyType === ''
//       //   ? items
//       //   : items.filter((item) => item.tags.indexOf(toyType) >= 0)
//       dispatch(
//         filteredProducts(
//           toyType === ''
//             ? items
//             : items.filter((item) => item.tags.indexOf(toyType) >= 0)
//         )
//       )
//     } catch (error) {
//       console.log('Error: Could not get filtered products', error)
//     }
//   }
// }

// export const addFilters = (filter) => {
//   return (dispatch) => {
//     dispatch(addFilter(filter))
//   }
// }

//INITIAL STATE
const initialState = {
  all: [],
  selected: {}
  // filtered: [],
}

//REDUCER
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, all: action.products}
    case SET_SINGLE_PRODUCT:
      return {...state, selected: action.product}
    // case FILTER_PRODUCTS:
    //   return {
    //     ...state,
    //     filtered: action.filteredProduct,
    //   }
    // case ADD_FILTER:
    //   return {
    //     ...state,
    //     filtered:
    //       action.filter === ''
    //         ? state.all
    //         : state.all.filter((item) => item.tags.indexOf(action.filter) >= 0),
    //   }
    case FILTER_PRODUCTS:
      return {
        ...state,
        toyType: action.payload.toyType,
        filteredItems: action.payload.items
      }
    default:
      return state
  }
}

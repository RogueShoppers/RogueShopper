import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import usersReducer from './user'
import productsReducer from './products'
import ordersReducer from './orders'
import searchReducer from './search'

const reducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  orders: ordersReducer,
  search: searchReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'

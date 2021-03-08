import axios from 'axios'

//ACTION TYPES

const SEARCH_DATABASE = 'SEARCH_DATABASE'

//ACTION CREATOR

export const _searchDatabase = query => {
  return {
    type: SEARCH_DATABASE,
    query
  }
}

//THUNK
export const searchDatabase = query => {
  return async dispatch => {
    try {
      const {data: searchResult} = await axios.get(`/api/search`, query)
      dispatch(_searchDatabase(searchResult))
    } catch (error) {
      console.log('error searching database: ', error)
    }
  }
}

//INITIAL STATE
const initialState = {
  searchResult: {}
}

//REDUCER

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_DATABASE:
      return {...state, searchResult: action.query}
    default:
      return state
  }
}

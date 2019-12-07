import { FETCH_LIST, FETCH_LIST_SUCCESS, FETCH_LIST_ERROR } from './actionType'

/**
 * initialState 
 * initial state of pokemont list reducer
 */
const initialState = {
  loading: false,
  error: null,
  list: []
}

const listReducer = ( state = initialState, action ) => {
  switch (action.payload) {
    case FETCH_LIST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload
      }
    case FETCH_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }    
    default:
      return state
  }
}

export default listReducer
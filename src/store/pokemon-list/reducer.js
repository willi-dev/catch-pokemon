/**
 * reducer for pokemon list
 */

import { FETCH_LIST, FETCH_LIST_SUCCESS, FETCH_LIST_ERROR } from './actionType'

/**
 * initialState 
 * initial state of pokemont list reducer
 */
const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  list: [],
  count: 0,
  hasNext: null,
  hasPrev: null,
  currentPage: 1
}

/**
 * listReducer
 * @author willi <https://github.com/willi-dev>
 * @param {*} state 
 * @param { type, payload } action 
 */
const listReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case FETCH_LIST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null
      }
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: [ ...state.list, ...action.payload.results],
        count: action.payload.count,
        hasNext: action.payload.next,
        hasPrev: action.payload.prev,
        currentPage: state.currentPage + 1
      }
    case FETCH_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload
      }    
    default:
      return state
  }
}

export default listReducer
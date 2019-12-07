/**
 * reducer for pokemon details
 */
import { FETCH_DETAIL, FETCH_DETAIL_SUCCESS, FETCH_DETAIL_ERROR } from './actionType'

/**
 * initialState
 * initial state of pokemon detail
 */
const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  detail: {}
}

/**
 * detailReducer 
 * @author willi <https://github.com/willi-dev>
 * @param {*} state 
 * @param { type, payload } action 
 */
const detailReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case FETCH_DETAIL:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null
      }
    case FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        detail: action.payload
      }
    case FETCH_DETAIL_ERROR:
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

export default detailReducer
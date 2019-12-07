import { FETCH_DETAIL, FETCH_DETAIL_SUCCESS, FETCH_DETAIL_ERROR } from './actionType'

/**
 * initialState
 * initial state of pokemon detail
 */
const initialState = {
  loading: false,
  error: null,
  detail: {}
}

const detailReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case FETCH_DETAIL:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        detail: action.payload
      }
    case FETCH_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }  
    default: 
      return state
  }
}

export default detailReducer
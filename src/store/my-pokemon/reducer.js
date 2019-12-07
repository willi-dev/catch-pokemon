import {
  CATCH_POKEMON, CATCH_POKEMON_SUCCESS, CATCH_POKEMON_ERROR,
  REMOVE_POKEMON, REMOVE_POKEMON_SUCCESS, REMOVE_POKEMON_ERROR,
  FETCH_MY_LIST, FETCH_MY_LIST_SUCCESS, FETCH_MY_LIST_ERROR
} from './actionType'

/**
 * initialState
 * initial state of pokemon favorite 
 */
const initialState = {
  loading: false,
  error: null,
  list: []
}

const myPokemonReducer = (state = initialState, action) => {
  switch(action.type) {
    case CATCH_POKEMON:
      return {
        ...state,
        loading: true,
        error: null
      }
    case CATCH_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...action.payload]
      }
    case CATCH_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case REMOVE_POKEMON:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case REMOVE_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case REMOVE_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case FETCH_MY_LIST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_MY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload
      }
    case FETCH_MY_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default myPokemonReducer

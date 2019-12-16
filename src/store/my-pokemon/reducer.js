/**
 * reducer for my pokemon
 */
import {
  CATCH_POKEMON, CATCH_POKEMON_SUCCESS, CATCH_POKEMON_ERROR,
  REMOVE_POKEMON, REMOVE_POKEMON_SUCCESS, REMOVE_POKEMON_ERROR
} from './actionType'

/**
 * initialState
 * initial state of pokemon favorite 
 */
const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  list: []
}

/**
 * myPokemonReducer
 * @author willi <https://github.com/willi-dev>
 * @param {*} state 
 * @param { type, payload } action 
 */
const myPokemonReducer = (state = initialState, action) => {
  switch(action.type) {
    case CATCH_POKEMON:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null
      }
    case CATCH_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: [...state.list, {...action.payload}]
      }
    case CATCH_POKEMON_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload
      }
    case REMOVE_POKEMON:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case REMOVE_POKEMON_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      }
    case REMOVE_POKEMON_ERROR:
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

export default myPokemonReducer

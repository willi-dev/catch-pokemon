/**
 * reducer for my pokemon
 */
import { CATCH_POKEMON_SUCCESS, REMOVE_POKEMON_SUCCESS } from './actionType'

/**
 * initialState
 * initial state of pokemon favorite 
 */
const initialState = {
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
    case CATCH_POKEMON_SUCCESS:
      return {
        ...state,
        list: [...state.list, {...action.payload}]
      }
    case REMOVE_POKEMON_SUCCESS:
      return {
        ...state,
        list: action.payload
      }
    default:
      return state
  }
}

export default myPokemonReducer

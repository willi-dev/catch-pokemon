/**
 * action for pokemon list
 * @author willi <https://github.com/willi-dev>
 */
import { 
  CATCH_POKEMON, CATCH_POKEMON_SUCCESS, CATCH_POKEMON_ERROR,
  REMOVE_POKEMON, REMOVE_POKEMON_SUCCESS, REMOVE_POKEMON_ERROR
} from './actionType'


/**
 * catchingPokemon
 * @param {*} data 
 */
export const catchingPokmeon = data => {
  return async (dispatch) => {
    dispatch(catchPokemon())
    dispatch(catchPokemonSuccess(data))
    dispatch(catchPokemonError())
  }
}

const catchPokemon = () => ({
  type: CATCH_POKEMON
})

const catchPokemonSuccess = data => ({
  type: CATCH_POKEMON_SUCCESS,
  payload: data
})

const catchPokemonError = error => ({
  type: CATCH_POKEMON_ERROR,
  payload: error
})

export const removingPokemon = data => {
  return (dispatch) => {
    dispatch(removePokemon())
    dispatch(removePokemonSuccess(data))
    dispatch(removePokemonError())
  }
}

const removePokemon = () => ({
  type: REMOVE_POKEMON
})

const removePokemonSuccess = data => ({
  type: REMOVE_POKEMON_SUCCESS,
  payload: data
})

const removePokemonError = error => ({
  type: REMOVE_POKEMON_ERROR,
  payload: error
})
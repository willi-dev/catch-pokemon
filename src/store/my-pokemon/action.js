/**
 * action for pokemon list
 * 
 */
import { 
  CATCH_POKEMON, CATCH_POKEMON_SUCCESS, CATCH_POKEMON_SUCCESS,
  REMOVE_POKEMON, REMOVE_POKEMON_SUCCESS, REMOVE_POKEMON_ERROR,
  FETCH_MY_LIST, FETCH_MY_LIST_SUCCESS, FETCH_MY_LIST_ERROR, CATCH_POKEMON_ERROR 
} from './actionType'

/**
 * fetchingLIstPokemon
 * @author willi <https://github.com/willi-dev>
 */
export const fetchingMyListPokemon = data => {
  return async (dispatch) => {
    dispatch(fetchMyPokemonList())
    dispatch(fetchMyPokemonListSuccess())
    dispatch(fetchMyPokemonListError())
  }
}

const fetchMyPokemonList = () => ({
  type: FETCH_MY_LIST
})

const fetchMyPokemonListSuccess = data => ({
  type: FETCH_MY_LIST_SUCCESS,
  payload: data
})

const fetchMyPokemonListError = error => ({
  type: FETCH_MY_LIST_ERROR,
  payload: error
})

/**
 * catchingPokemon
 * @param {*} data 
 */
export const catchingPokmeon = data => {
  return async (dispatch) {
    dispatch(catchPokemon())
    dispatch(catchPokemonSuccess())
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
  return async (dispatch) {
    dispatch(removePokemon())
    dispatch(removePokemonSuccess())
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
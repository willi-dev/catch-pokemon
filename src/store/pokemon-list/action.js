/**
 * action for pokemon list
 * 
 */
import { FETCH_LIST, FETCH_LIST_SUCCESS, FETCH_LIST_ERROR } from './actionType'

/**
 * fetchingLIstPokemon
 * @author willi <https://github.com/willi-dev>
 */
export const fetchingListPokemon = data => {
  return async (dispatch) => {
    dispatch(fetchListPokemon())
    dispatch(fetchListPokemonSuccess())
    dispatch(fetchListPokemonError())
  }
}

const fetchListPokemon = () => ({
  type: FETCH_LIST
})

const fetchListPokemonSuccess = data => ({
  type: FETCH_LIST_SUCCESS,
  payload: data
})

const fetchListPokemonError = error => ({
  type: FETCH_LIST_ERROR,
  payload: error
})
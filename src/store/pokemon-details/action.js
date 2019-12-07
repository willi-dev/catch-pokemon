/**
 * action for pokemon details
 * @author willi <https://github.com/willi-dev>
 */
import { FETCH_DETAIL, FETCH_DETAIL_SUCCESS, FETCH_DETAIL_ERROR } from './actionType'

export const fetchingPokemonDetail = data => {
  return async (dispatch) => {
    dispatch(fetchPokemonDetail())
    dispatch(fetchPokemonDetailSuccess())
    dispatch(fetchPokemonDetailError())
  }
}

/**
 * fetchPokemonDetal
 * @author willi <https://github.com/willi-dev>
 */
const fetchPokemonDetail = () => ({
  type: FETCH_DETAIL
})

/**
 * fetchPokemonDetailSuccess
 * @author willi <https://github.com/willi-dev>
 * @param {*} data 
 */
const fetchPokemonDetailSuccess = data => ({
  type: FETCH_DETAIL_SUCCESS,
  payload: data
})

/**
 * fetchPokemonDetailError
 * @author willi <https://github.com/willi-dev>
 * @param {*} error 
 */
const fetchPokemonDetailError = error => ({
  type: FETCH_DETAIL_ERROR,
  payload: error
})
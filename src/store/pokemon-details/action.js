/**
 * action for pokemon details
 */
import { FETCH_DETAIL, FETCH_DETAIL_SUCCESS, FETCH_DETAIL_ERROR } from './actionType'

export const fetchingPokemonDetail = data => {
  return async (dispatch) {
    dispatch(fetchPokemonDetail())
    dispatch(fetchPokemonDetailSuccess())
    dispatch(fetchPokemonDetailError())
  }
}

const fetchPokemonDetail = () => ({
  type: FETCH_DETAIL
})

const fetchPokemonDetailSuccess = data => ({
  type: FETCH_DETAIL_SUCCESS,
  payload: data
})

const fetchPokemonDetailError = error => ({
  type: FETCH_DETAIL_ERROR,
  payload: error
})
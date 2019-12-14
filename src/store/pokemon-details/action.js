/**
 * action for pokemon details
 * @author willi <https://github.com/willi-dev>
 */
import axios from 'axios'
import { FETCH_DETAIL, FETCH_DETAIL_SUCCESS, FETCH_DETAIL_ERROR } from './actionType'

const API = process.env.REACT_APP_POKE_API_URL

/**
 * fetchingPokemonDetail
 * @param {*} monster 
 */
export const fetchingPokemonDetail = pokemon => {
  return async (dispatch) => {
    dispatch(fetchPokemonDetail())
    try {
      const response = await axios.get(`${API}/pokemon/${pokemon.name}`)
      const { data } = response
      dispatch(fetchPokemonDetailSuccess(data))
    } catch (e) {
      const { data } = e.response
      dispatch(fetchPokemonDetailError(data))
    }
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
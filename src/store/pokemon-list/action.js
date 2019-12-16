/**
 * action for pokemon list
 * @author willi <https://github.com/willi-dev>
 */
import axios from 'axios'
import { FETCH_LIST, FETCH_LIST_SUCCESS, FETCH_LIST_ERROR } from './actionType'

const API = process.env.REACT_APP_POKE_API_URL
const limit = 20
/**
 * fetchingLIstPokemon
 * @author willi <https://github.com/willi-dev>
 */
export const fetchingListPokemon = (currentPage = 1) => {
  console.log(currentPage)
  return async (dispatch) => {
    const offset = (currentPage - 1) * limit
    dispatch(fetchListPokemon())
    try {
      const response = await axios.get(`${API}/pokemon`, {
        params: { offset, limit }
      })
      const { data } = response
      dispatch(fetchListPokemonSuccess(data))
    } catch (e) {
      const { data } = e.response
      dispatch(fetchListPokemonError(data))
    }
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
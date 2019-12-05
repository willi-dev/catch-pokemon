import { combineReducers } from 'redux'

import listReducer from './pokemon-list/reducer'
import detailReducer from './pokemon-details/reducer'
import myPokemonReducer from './my-pokemon/reducer'

export default combineReducers({ 
  list: listReducer, 
  detail: detailReducer,
  myPokemon: myPokemonReducer
})
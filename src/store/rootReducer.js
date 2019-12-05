import { combineReducers } from 'redux'

import listReducer from './pokemon-list/reducer'
import detailReducer from './pokemon-details/reducer'
import favReducer from './pokemon-fav/reducer'

export default combineReducers({ 
  list: listReducer, 
  detail: detailReducer, 
  favorite: favReducer
})
import {combineReducers} from 'redux'

import showComponent from './show-component'
import storyWordReducer from './storyWordReducer'
import showHouse from './showHouse'
import survival from './survivalReducer'

export default combineReducers({
  showComponent,
  storyWordReducer,
  showHouse,
  survival
})

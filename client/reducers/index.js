import {combineReducers} from 'redux'

import words from './words'
import showComponent from './show-component'

export default combineReducers({
  words,
  showComponent
})

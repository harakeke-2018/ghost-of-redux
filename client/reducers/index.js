import {combineReducers} from 'redux'

import showComponent from './show-component'
import storyWordReducer from './storyWordReducer'

export default combineReducers({
  showComponent,
  storyWordReducer
})

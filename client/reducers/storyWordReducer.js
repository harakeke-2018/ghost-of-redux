import {STORY_WORDS} from '../actions'

const initialState = {}

function storyWordReducer (state = initialState, action) {
  switch (action.type) {
    case STORY_WORDS:
      return action.storyWords
    default:
      return state
  }
}

export default storyWordReducer

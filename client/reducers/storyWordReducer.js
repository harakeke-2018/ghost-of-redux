import {STORY_WORDS} from '../actions/index'

const initialState = {}

function storyWordReducer (state = initialState, action) {
  console.log('reducer', action)
  switch (action.type) {
    case 'STORY_WORDS':
      return action.storyWords
    default:
      return state
  }
}

export default storyWordReducer

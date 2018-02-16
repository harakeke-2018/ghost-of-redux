import {SURVIVAL} from '../actions'

const initialState = {}

function survivalReducer (state = initialState, action) {
  switch (action.type) {
    case SURVIVAL:
      return action.survive
    default:
      return state
  }
}

export default survivalReducer

const showHouse = (state = false, action) => {
  switch (action.type) {
    case 'STORY_WORDS':
      return true
    default:
      return state
  }
}

export default showHouse

const showComponent = (state = '', action) => {
  switch (action.type) {
    case 'SHOW_COMPONENT':
      return action.id
    default:
      return state
  }
}

export default showComponent

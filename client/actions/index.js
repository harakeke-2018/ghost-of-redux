let nextWordId = 0

export const addWord = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}

export const showComponent = (component) => {
  console.log(component)
  return {
    type: 'SHOW_COMPONENT',
    id: component
  }
}

let nextWordId = 0

export const STORY_WORDS = 'STORY_WORDS'

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

export const storyWords = (words) => {
  console.log(words)
  return {
    type: STORY_WORDS,
    storyWords: words
  }
}

export const STORY_WORDS = 'STORY_WORDS'

export const addWord = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}

export const storyWords = (words) => {
  console.log(words)
  return {
    type: STORY_WORDS,
    storyWords: words
  }
}

import request from 'superagent'

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

//async

export const beginStory = (words) => {
  return (dispatch) => {
    dispatch(storyWords(words))
    request
    .get(`https://love-calculator.p.mashape.com/getPercentage?fname=${words.name1}&sname=${words.name2}`)
    .set('X-Mashape-Key', '')
    .set("X-Mashape-Host", "love-calculator.p.mashape.com")
    .end(function (result) {
      console.log(result.status, result.headers, result.body)
    })
  }
}

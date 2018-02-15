import React from 'react'

class Window extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <h1>You chose the window</h1>
        <p>You enter the house through the window, but there's nothing there so you just go home.</p>
        <p>Nice one!</p>
        <a href='/'>Try again!</a>
      </div>
    )
  }
}

export default Window

import React from 'react'
import {connect} from 'react-redux'

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
        <p><strong>{this.props.friend}</strong> would have chosen the window. But as soon as you open it, the window SMASHES and reveals a <strong>{this.props.adjective} {this.props.animal}</strong> ghost!</p>
        <p>It is super scary and you run away...</p>
        <a href='/'>Try again!</a>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    friend: state.storyWordReducer.name2,
    adjective: state.storyWordReducer.adjective1,
    animal: state.storyWordReducer.animal2
  }
}

export default connect(mapStateToProps)(Window)

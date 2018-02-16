import React from 'react'
import { connect } from 'react-redux'

class Window extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showResults: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      showResults: true
    })
  }

  render () {
    return (
      <div>
        <h1>You chose the window</h1>
        <p><strong>{this.props.words.name1}</strong> wanted to go through the door but <strong>{this.props.words.name2}</strong> insisted on smashing the window with a {this.props.words.object2}.
        <br />The window SMASHES as they throw the {this.props.words.object2} through, revealing a <strong>{this.props.words.adjective2} ghost {this.props.words.animal1}</strong> inside!</p>
        <p><strong>{this.props.words.name1}</strong> and <strong>{this.props.words.name2}</strong> start shaking with fear!</p>
        <button onClick={this.handleClick}>The ghost comes closer...</button>
        {this.state.showResults &&
          <div>
            <p>It is super scary and they run away!</p>
            <a href='/'>Try again!</a>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    words: state.storyWordReducer
  }
}

export default connect(mapStateToProps)(Window)

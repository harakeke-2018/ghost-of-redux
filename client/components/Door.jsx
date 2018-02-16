import React from 'react'
import { connect } from 'react-redux'
// import {showComponent} from '../actions'

class Door extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showResults: false
    }
    this.handleClickDoor = this.handleClickDoor.bind(this)
  // }
  // handleClick (e) {
  //   this.props.dispatch(showComponent(e.target.id))
  }

  handleClickDoor () {
    this.setState({
      showResults: true
    })
  }

  render () {
    return (
      <div>
        <h1>You chose the door</h1>

        <p>They walk up to the house, and <strong>{this.props.words.adjective2} {this.props.words.name1}</strong>, who insisted on opening the door, walks up and knocks twice.
        <br />There is a strong <strong>{this.props.words.smell1}</strong> smell which gets worse as they get closer! 
        <br /> The door creaks open...</p>

        <button onClick={this.handleClickDoor}>Open the door</button>

        {this.state.showResults &&
        <div>
          <p>Behind the door is a <strong>{this.props.words.animal2}</strong>.
            <br />
        The <strong>{this.props.words.animal2}</strong> attacks you and you die a slow painful death. Sorry!</p>
          <a href='/'>Try again!</a>
        </div>
        }
        {/* <button id='window' onClick={this.handleClick}>Show </button> */}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    words: state.storyWordReducer
  }
}
export default connect(mapStateToProps)(Door)

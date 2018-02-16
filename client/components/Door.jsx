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
        <p> You thought of your friend <strong>{this.props.friend}</strong>, who would open the door.
          <br />
        The <strong>{this.props.smell}</strong> smell was getting worse! </p>

        <button onClick={this.handleClickDoor}>Open the door</button>

        {this.state.showResults &&
        <div>
          <p>Behind the door was a <strong>{this.props.animal}</strong>.
            <br />
        The <strong>{this.props.animal}</strong> attacks you and you have a {this.props.percent}% chance of dieing a slow painful death.</p>
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
    friend: state.storyWordReducer.name2,
    smell: state.storyWordReducer.smell1,
    animal: state.storyWordReducer.animal1,
    percent: state.survival
  }
}
export default connect(mapStateToProps)(Door)

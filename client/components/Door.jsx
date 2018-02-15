import React from 'react'
import { connect } from 'react-redux'
// import {showComponent} from '../actions'

class Door extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showWindow: false
    }
  //   this.handleClick = this.handleClick.bind(this)
  // }
  // handleClick (e) {
  //   this.props.dispatch(showComponent(e.target.id))
  }

  render () {
    return (
      <div>
        <h1>You chose the door</h1>
        <p> You thought of your friend <strong>{this.props.friend}</strong>, who would open the door.
          <br />
        The <strong>{this.props.smell}</strong> smell was getting worse! Behind the door was a <strong>{this.props.animal}</strong>.
          <br />
        The <strong>{this.props.animal}</strong> attacks you and you die a slow painful death.</p>

      <a href='/'>Try again!</a>
        {/* <button id='window' onClick={this.handleClick}>Show </button> */}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    friend: 'Belma',
    smell: 'poo',
    animal: 'kitten',
    name: state.name
  }
}
export default connect(mapStateToProps)(Door)

import React from 'react'
import { connect } from 'react-redux'
import {showComponent} from '../actions'

class House extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showWindow: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    this.props.dispatch(showComponent(e.target.id))
  }

  render () {
    return (
      <div>
        <h1>Welcome to the haunted house</h1>
        <p> Welcome Tyler. Do you want to go through the window or the door? </p>
        <button id='window' onClick={this.handleClick}>Window</button>
        <button id='door' onClick={this.handleClick}>Door</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    name: state.name
  }
}
export default connect(mapStateToProps)(House)

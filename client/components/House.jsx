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
        <h1 className='title'>Late one stormy night...</h1>
        <p><strong>{this.props.words.name1}</strong> and <strong>{this.props.words.name2}</strong> are walking along a dark forest path. 
        <br /> They come across a {this.props.words.adjective1} house and they must decide...
        <br />Should they enter through the door, or open the window? </p>
        <button id='window' onClick={this.handleClick}>Window</button>
        <button id='door' onClick={this.handleClick}>Door</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    words: state.storyWordReducer
  }
}
export default connect(mapStateToProps)(House)

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
      <div className='container'>
        <h1 className='title row'>You chose the window</h1>
        <div className='row'>
          <p><strong>{this.props.words.name1}</strong> wanted to go through the door but <strong>{this.props.words.name2}</strong> insisted on smashing the window with a {this.props.words.object2}.
            <br />The window SMASHES as they throw the {this.props.words.object2} through, revealing a <strong>{this.props.words.adjective2} ghost {this.props.words.animal1}</strong> inside!</p>
        </div>
        <div className='row'>
          <p><strong>{this.props.words.name1}</strong> and <strong>{this.props.words.name2}</strong> start shaking with fear!</p>
        </div>
        <div className='row'>
          <button onClick={this.handleClick}>The ghost comes closer...</button>
        </div>
        {this.state.showResults &&
          <div>
            <div className='row'>
              <p>It is super scary and they run away!</p>
            </div>
            <div className='row'>
              <a href='/'>Try again!</a>
            </div>
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

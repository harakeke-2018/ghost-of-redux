import React from 'react'
import {connect} from 'react-redux'

import {storyWords} from '../actions/index'

class WordForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name1: '',
      name2: '',
      animal1: '',
      animal2: '',
      adjective1: '',
      adjective2: '',
      smell1: '',
      smell2: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }

  changeHandler (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  clickHandler () {
    this.props.dispatch(storyWords(this.state))
  }

  render () {
    return (
      <div>
        <form className='container'>
          <div className='row'>
            <label>Names:
            <div className='row'>
              <input onChange={this.changeHandler} name='name1' />
              <input onChange={this.changeHandler} name='name2' />
            </div>
            </label>
          </div>
          <div className='row'>
            <label>Animals:
            <div className=''>
              <input onChange={this.changeHandler} name='animal1' />
              <input onChange={this.changeHandler} name='animal2' />
            </div>
            </label>
          </div>
          <div className='row'>
            <label>Adjectives:
            <div className='row'>
              <input onChange={this.changeHandler} name='adjective1' />
              <input onChange={this.changeHandler} name='adjective2' />
            </div>
            </label>
          </div>
          <div className='row'>
            <label>Smells:
            <div className='row'>
              <input onChange={this.changeHandler} name='smell1' />
              <input onChange={this.changeHandler} name='smell2' />
            </div>
            </label>
          </div>
          <div className='row'>
            <button type='button' onClick={this.clickHandler}>Begin Adventure</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(WordForm)

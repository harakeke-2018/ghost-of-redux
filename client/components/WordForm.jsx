import React from 'react'
import {connect} from 'react-redux'

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
    // this.clickHandler = this.clickHandler.bind(this)
  }

  changeHandler (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  clickHandler () {
    //dispatch are action
  }

  render () {
    return (
      <div>
        <form>
          <label>Names:
            <input onChange={this.changeHandler} name='name1' />
            <input onChange={this.changeHandler} name='name2' />
          </label>
          <label>Animals:
            <input onChange={this.changeHandler} name='animal1' />
            <input onChange={this.changeHandler} name='animal2' />
          </label>
          <label>Adjectives:
            <input onChange={this.changeHandler} name='adjective1' />
            <input onChange={this.changeHandler} name='adjective2' />
          </label>
          <label>Smells:
            <input onChange={this.changeHandler} name='smell1' />
            <input onChange={this.changeHandler} name='smell2' />
          </label>
          <button type='button' onClick={this.clickHandler}>Begin Adventure</button>
        </form>
      </div>
    )
  }
}

export default connect()(WordForm)

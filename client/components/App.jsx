import React from 'react'
import {connect} from 'react-redux'

import House from './House'
import Window from './Window'
import Door from './Door'
import WordForm from './WordForm'

const App = (props) => (
  <div className='app-container'>
    {!props.showHouse && <WordForm />}
    {props.showHouse && <House />}
    {props.showComponent === 'window' && <Window />}
    {props.showComponent === 'door' && <Door />}
  </div>
)

function mapStateToProps (state) {
  return {
    showHouse: state.showHouse,
    showComponent: state.showComponent
  }
}

export default connect(mapStateToProps)(App)

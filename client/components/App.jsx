import React from 'react'
import {connect} from 'react-redux'

import House from './House'
import Window from './Window'
import Door from './Door'

const App = (props) => (
  <div className='app-container'>
    <House />
    {props.showComponent === 'window' && <Window />}
    {props.showComponent === 'door' && <Door />}
  </div>
)

function mapStateToProps (state) {
  return {
    showComponent: state.showComponent
  }
}

export default connect(mapStateToProps)(App)

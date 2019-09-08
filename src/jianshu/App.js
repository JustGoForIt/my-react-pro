import React, { Component } from 'react'
import Header from './common/header'
import GloablStled from './style'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
 		return (
      <div>
     <GloablStled />
     <Header />
   </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import Header from './common/header'
import Globalstyled from './style'
import Globalicon from './iconfont/iconfont'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
 		return (
      <div>
     <Globalstyled />
     <Globalicon />
     <Header />
   </div>
    )
  }
}

export default App

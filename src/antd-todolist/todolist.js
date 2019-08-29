import React, { Component } from 'react'

import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

import store from './../store'

class Todolist extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
  }

  render () {
    return (<div style={{ 'marginLeft': '10px', 'marginTop': '10px' }} >
      <Input placeholder='todo info' style={{ 'width': '300px', 'marginRight': '10px' }} />
      <Button type='primary'>提交</Button>

      <List
        style={{ 'marginTop': '30px', 'width': '300px' }}
        size='small'
        bordered
        dataSource={this.state.list}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    	</div>)
  }
}

export default Todolist

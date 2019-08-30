import React, { Component } from 'react'

import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './../store/actionCreators'
import store from './../store'

class Todolist extends Component {
  constructor (props) {
    super(props)
    debugger
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnCilck = this.handleBtnCilck.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render () {
    return (<div style={{ 'marginLeft': '10px', 'marginTop': '10px' }} >
      <Input
        value={this.state.inputValue}
        placeholder='todo info'
        style={{ 'width': '300px', 'marginRight': '10px' }}
        onChange={this.handleInputChange} />
      <Button type='primary' onClick={this.handleBtnCilck}>提交</Button>

      <List
        style={{ 'marginTop': '30px', 'width': '300px' }}
        size='small'
        bordered
        dataSource={this.state.list}
        renderItem={(item, index) => <List.Item onClick={(e) => { this.handleItemDelete(index, e) }}>{item}</List.Item>}
      />
    	</div>)
  }
  handleInputChange (e) {
  	const action = getInputChangeAction(e.target.value)
  	store.dispatch(action)
  }

  handleStoreChange () {
  	this.setState(store.getState())
  }

  handleBtnCilck () {
  	const action = getAddItemAction()
  	store.dispatch(action)
  }

  handleItemDelete (index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default Todolist

import React, { Component } from 'react'
import TodoListUI from './todolistUI2'
import 'antd/dist/antd.css'
import axios from 'axios'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction } from './../store/actionCreators'
import store from './../store'

class Todolist extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    this.handleBtnCilck = this.handleBtnCilck.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render () {
    return (<TodoListUI
      inputValue={this.state.inputValue}
      list={this.state.list}
      handleInputChange={this.handleInputChange}
      handleBtnCilck={this.handleBtnCilck}
      handleItemDelete={this.handleItemDelete} />)
  }
  componentDidMount () {
  	axios.get('./todolist').then((resp) => {
  		const data = resp.data
  		const action = initListAction(data)
  	}, () => {

  	})
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

  handleItemDelete (index, e) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default Todolist

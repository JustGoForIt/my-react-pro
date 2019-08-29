
import React, { Component, Fragment } from 'react'
import TodoItem from './todoItem'
import Axios from 'axios'
import './style.css'

class TodoList extends Component {
  constructor (props) {
    super(props) // 调用父类的构造函数
    this.state = {
      inputValue: '',
      list: [1, '2', '3']
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleInputDelete = this.handleInputDelete.bind(this)
  }
  render () {
    return (
      <Fragment>
        <div>
          <label htmlFor='inserArea'>输入内容</label>
          <input
            id='inserArea'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(input) => { this.input = input }} />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={(ul) => { this.ul = ul }}>
          {
            this.getTodoItem()
          }
        </ul>
      </Fragment>
    )
  }
  componentDidMount () {
    Axios.get('/api/todolist')
      .then(() => {
        alert('success')
      })
      .catch(() => {
        alert('fail')
      })
  }

  getTodoItem () {
    return this.state.list.map((item, index) => {
      return (<TodoItem
        key={index}
        item={item}
        index={index}
        handleInputDelete={this.handleInputDelete} />)
    })
  }
  handleInputChange (e) {
    // let inputValue = e.target.value
    let inputValue = this.input.value
    this.setState(() => {
      return {
        inputValue: inputValue
      }
    })
  }

  handleBtnClick () {
    this.setState((prevState) => {
      return {
        // list: [...this.state.list, this.state.inputValue],
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }
    }, () => {
      debugger
      console.log(this.ul.querySelectorAll('li'))
    })
  }

  handleInputDelete (index) {
    // immutable
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
  }
}

export default TodoList

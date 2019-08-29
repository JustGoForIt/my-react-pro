
import React, { Component, Fragment } from 'react'

import TodoItem from './todoItem'
import './style.css'

class TodoList extends Component {
  constructor (props) {
    super(props) // 调用父类的构造函数
    this.state = {
      inputValue: '',
      list: [1, 2, 3]
    }
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
            onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (<TodoItem
                key={index}
                item={item}
                index={index}
                handleInputDelete={this.handleInputDelete.bind(this)} />)
            })
          }
        </ul>
      </Fragment>
    )
  }
  handleInputChange (e) {
    console.log(this) // undefined
    let inputValue = e.target.value
    this.setState({
      inputValue: inputValue
    })
  }

  handleBtnClick () {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleInputDelete (index) {
    // immutable
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default TodoList

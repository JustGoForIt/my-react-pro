import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
class TodoListUI extends Component {
  render () {
    return (<div style={{ 'marginLeft': '10px', 'marginTop': '10px' }} >
      <Input
        value={this.props.inputValue}
        placeholder='todo info'
        style={{ 'width': '300px', 'marginRight': '10px' }}
        onChange={this.props.handleInputChange} />
      <Button type='primary' onClick={this.props.handleBtnCilck}>提交</Button>

      <List
        style={{ 'marginTop': '30px', 'width': '300px' }}
        size='small'
        bordered
        dataSource={this.props.list}
        renderItem={(item, index) => <List.Item onClick={(e) => { this.props.handleItemDelete(index, e) }}>{item}</List.Item>}
      />
    	</div>)
  }
}

export default TodoListUI

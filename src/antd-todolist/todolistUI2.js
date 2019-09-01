import React, { Component } from 'react'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
  return (<div style={{ 'marginLeft': '10px', 'marginTop': '10px' }} >
    <Input
      value={props.inputValue}
      placeholder='todo info'
      style={{ 'width': '300px', 'marginRight': '10px' }}
      onChange={props.handleInputChange} />
    <Button type='primary' onClick={props.handleBtnCilck}>提交</Button>

    <List
      style={{ 'marginTop': '30px', 'width': '300px' }}
      size='small'
      bordered
      dataSource={props.list}
      renderItem={(item, index) => <List.Item onClick={(e) => { props.handleItemDelete(index, e) }}>{item}</List.Item>}
    />
  </div>)
}

export default TodoListUI

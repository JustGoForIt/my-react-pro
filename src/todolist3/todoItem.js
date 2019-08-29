import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    const { item, test } = this.props
    return <li onClick={this.handleClick}>
      {test}- {item}
    </li>
  }

  shouldComponentUpdate (nextProps, nextState) {
    debugger
    if (nextProps.item !== this.props.item) {
      return true
    } else {
      return false
    }
  }

  handleClick () {
    const { index, handleInputDelete } = this.props
    handleInputDelete(index)
  }
  componentWillUnmount () {
    debugger
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  delelte: PropTypes.func,
  index: PropTypes.number

}
TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem

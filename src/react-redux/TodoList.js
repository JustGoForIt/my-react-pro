import React, { Component } from 'react'
import { connect } from 'react-redux'
class TodoList extends Component {
  constructor (props) {
    super(props)
  }
  render () {
  	return (<div>
      <div>
      <input value={this.props.inputValue} onChange={this.props.hanleInputChange} />
      <button }>提交</button>
    </div>
      <ul>
      <li>dell</li>
    </ul>
  		</div>)
  }
  hanleInputAdd () {

  }
}
const mapStateToProps = (state) => {
  return {
  	inputValue: state.inputValue
  }
}
// store.dispatch方法挂载到store上
const mapDispatchToProps = (dispatch) => {
  return {
  	  hanleInputChange (e) {
  	  	const inputValue = e.target.value
  	  	const action = {
  	  		type: 'change_input_value',
  	  		value: inputValue
  	  	}
  	  	dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

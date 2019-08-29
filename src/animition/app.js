import React, { Component, Fragment } from 'react'
import './style.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class App extends Component {
  constructor (props) {
  	super(props)
  	this.state = {
  		show: true,
  		list: []
  	}
  	this.handleToggle = this.handleToggle.bind(this)
  	this.handleAddList = this.handleAddList.bind(this)
  }

  render () {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>测试赛静安寺肯德基发卡积分卡积分亏</div>
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit>
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>

        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={1000}
                  classNames='fade'
                  unmountOnExit
                  key={index}>
                  <div >{item}</div>
                </CSSTransition>)
            })
          }
        </TransitionGroup>
        <button onClick={this.handleAddList}>addlist</button>
      </Fragment>
    )
  }
  handleToggle () {
  	this.setState({
  		show: !this.state.show
  	})
  }
  handleAddList () {
  	this.setState((prevState) => {
  		return {
  		  list: [...prevState.list, 'item']
  		}
  	})
  }
}

export default App

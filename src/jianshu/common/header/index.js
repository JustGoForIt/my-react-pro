import React from 'react'
import { CSSTransition } from 'react-transition-group'

import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className='left'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>
          <i className='iconfont'>&#xe636;</i>
        </NavItem>
        <NavItem className='right'>登录</NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames='slide'>
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFoucus}
              onBlur={props.handleBlur} />
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>

        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writting'><i className='iconfont'>&#xe615;</i>写文章</Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>)
}

const mapStateToProps = (state) => {
  debugger
  return {
  	focused: state.focused
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  	handleInputFoucus () {
  		const action = {
  			type: 'search_foucs'
  		}
  		dispatch(action)
  	},
  	handleBlur () {
  		const action = {
  			type: 'search_blur'
  		}
  		dispatch(action)
  	}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch } from './style'
class Header extends Component {
  render () {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>Aa</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavSearch />
        </Nav>
      </HeaderWrapper>)
  }
}

export default Header

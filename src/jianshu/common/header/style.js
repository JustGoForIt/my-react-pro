import styled from 'styled-components'
import logoPic from '../../static/jianshu.png'
export const HeaderWrapper = styled.div`
  height:56px;
  border-bottom:1px solid #f0f0f0;
  position:relative;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  position:absolute;
  left:0;
  top:0;
  height:56px;
  width:100px;
  background:url(${logoPic});
  background-size:contain;
 `
export const Nav = styled.div`
  width:960px;
  margin:0 auto;
  height:100%;

`
export const NavItem = styled.div`
  &.left{
  	float:left;
  }
  &.right{
  	float:right;
  	color:#969696;
  }
  &.active{
  	color:#ea6f5a;
  }

  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width:160px;
  height:38px;
  outline:none;
  border:none;
  border-radius:19px;
  background:green;
  margin-top:9px;
  padding:0 20px;
  box-sizing:border-box;
  background:#eee;
  font-size:14px;
  margin-left:12px;
  &::placeholder{
  	color:#999;
  }
`

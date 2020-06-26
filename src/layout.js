import React, { Fragment } from 'react'
import styled from 'styled-components'
// import img from '../images/bg.png'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`

const Footer = styled.footer`
  font-size: 14px;
  color: white;
  padding: 30px 100px;
  text-align: right;
  width: 100vw;
  border-top: 1px solid #dc5f53;
  display: flex;
  justify-content: space-between;
  background-image: url(${require('file-loader!../images/bg.png')});
  background-repeat: no-repeat;
  background-size: cover;
`

const Layout = ({ children }) => (
  <Fragment>
    <Wrapper>{children}</Wrapper>
    <Footer>
      <span>sopra steria: uk design team</span>
      <span>progressive web apps for designers</span>
    </Footer>
  </Fragment>
)

export default Layout

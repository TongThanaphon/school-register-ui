import React from 'react'
import styled from 'styled-components'

import LoginForm from '../coponents/LoginForm'
import Logo from '../coponents/Logo'

const Login = () => {
  return (
    <RootContainer>
      <Item>
        <Logo width="120px" url="https://storage.googleapis.com/assets.goscoreup.com/static/b2b/scoreUP_logo_color.png" />
      </Item>
      <Item>
        <LoginForm />
      </Item>
    </RootContainer>
  )
}

export default Login

const RootContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: #f7f7f7;
`
const Item = styled.div`
  :nth-child(1) {
    margin-top: 20px;
    flex-basis: 20%;
  }

  @media screen and (max-width: ${(p) => p.theme.breakpoints.xs.max}) {
    :nth-child(1) {
      display: none;
    }
  }
`

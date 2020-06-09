import React from 'react'
import styled from 'styled-components'

import ButtonComponent from '../coponents/ButtonComponent'
import Header from '../coponents/Header'
import Logo from '../coponents/Logo'
import InputComponent from '../coponents/InputComponent'

const LoginForm = () => {
  return (
    <Root>
      <Container>
        <Item>
          <Logo width="120px" url="https://storage.googleapis.com/assets.goscoreup.com/static/b2b/scoreUP_logo_color.png" />
        </Item>
        <Item>
          <Logo width="250px" url="https://storage.googleapis.com/assets.goscoreup.com/static/b2b/SWU_logo.png" />
        </Item>
        <Item>
          <Header text="เข้าสู่ระบบ scoreUP" />
        </Item>
        <Item>
          <InputComponent title="รหัสประจำตัว" placeholder="กรุณากรอกรหัสประจำตัวนักเรียน" />
        </Item>
        <Item>
          <InputComponent title="วัน เดือน ปี เกิดของคุณ" placeholder="กรุณากรอกวันเกิดของคุณ" hint="(ตัวอย่าง 21091994)" />
        </Item>
        <Item>
          <ButtonComponent text="เข้าสู่ระบบ" background="#0A95F9" color="white" />
        </Item>
      </Container>
    </Root>
  )
}

export default LoginForm

const Root = styled.div`
  width: 30vw;

  @media screen and (max-width: ${(p) => p.theme.breakpoints.xs.max}) {
    width: 100vw;
  }
`
const Container = styled.div`
  /* border: 1px solid black; */
  background: white;
  padding: 50px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #ccc;

  @media screen and (max-width: ${(p) => p.theme.breakpoints.xs.max}) {
    height: 100vh;
    border-radius: 0px;
  }
`
const Item = styled.div`
  :nth-child(1) {
    display: none;
  }

  :nth-child(1),
  :nth-child(2),
  :nth-child(3),
  :nth-last-child(1) {
    text-align: center;
  }

  :nth-child(1),
  :nth-child(2),
  :nth-child(3) {
    margin-bottom: 40px;
  }

  :nth-child(4),
  :nth-child(5) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: ${(p) => p.theme.breakpoints.xs.max}) {
    :nth-child(1) {
      display: block;
    }
  }
`

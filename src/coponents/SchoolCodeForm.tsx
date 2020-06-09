import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Modal } from 'antd'

import { useHistory } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import * as R from 'ramda'

import { getRootLoginState, getValidateSchoolCodeState } from '../modules/login/selectprs'
import { enterSchoolCode } from '../modules/login/actions'

import Logo from './Logo'
import Header from './Header'
import InputComponent from './InputComponent'
import ButtonComponent from './ButtonComponent'

const SchoolCodeForm = () => {
  const [code, setCode] = useState('')
  const dispatch = useDispatch()
  const enterSchoolCodeState = useSelector(R.compose(getValidateSchoolCodeState, getRootLoginState))
  const history = useHistory()

  useEffect(() => {
    dispatch(enterSchoolCode(code))
  }, [code, dispatch])

  const handleValidateCode = (e) => {
    if (enterSchoolCodeState) {
      history.push('/login')
    } else {
      errorDisplay()
    }
  }

  const errorDisplay = () => {
    Modal.error({
      title: 'Invalid input',
      content: 'Invalid input school code!',
    })
  }

  return (
    <Root>
      <Container>
        <Item>
          <Logo url="https://storage.googleapis.com/assets.goscoreup.com/static/b2b/scoreUP_logo_color.png" width="120px" />
        </Item>
        <Item>
          <Header text="ใส่รหัสโรงเรียนเพื่อดำเนินการต่อ" />
        </Item>
        <Item>
          <InputComponent title="รหัสโรงเรียน" placeholder="กรุณากรอกรหัสโรงเรียน" setCode={setCode} />
        </Item>
        <Item>
          <ButtonComponent text="ไปต่อ" background="#0A95F9" color="white" handleClick={(e) => handleValidateCode(e)} />
        </Item>
      </Container>
    </Root>
  )
}

export default SchoolCodeForm

const Root = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${(p) => p.theme.breakpoints.xs.max}) {
    align-items: flex-start;
    height: 70vh;
  }
`

const Container = styled.div`
  /* border: 1px solid black; */
  width: 24vw;
  max-height: 100%;

  @media screen and (max-width: ${(p) => p.theme.breakpoints.xs.max}) {
    width: 90vw;
    margin-top: 10px;
  }
`

const Item = styled.div`
  margin-top: 20px;

  @media screen and (max-width: ${(p) => p.theme.breakpoints.xs.max}) {
    :nth-last-child(4) {
      text-align: center;
    }

    :nth-last-child(3) {
      text-align: center;
    }
  }
`

import React from 'react'
import { Input } from 'antd'
import styled from 'styled-components'

interface InputComponentProps {
  title: string
  placeholder: string
  setCode?: (code) => void
  hint?: string
}

const InputComponent = (props: InputComponentProps) => {
  const { title, placeholder, hint, setCode } = props

  return (
    <RootContainer>
      <TextContainer>
        <TitleInput>{title}</TitleInput>
        <HintText>{hint}</HintText>
      </TextContainer>
      <Input placeholder={placeholder} onChange={(e) => setCode(e.target.value)} />
    </RootContainer>
  )
}

export default InputComponent

const RootContainer = styled.div``

const TitleInput = styled.p`
  margin-bottom: 10px;
  font-size: 18px;

  @media screen and (max-width: ${(p) => p.theme.breakpoints.xs.max}) {
    font-size: 15px;
  }
`

const HintText = styled.p`
  margin-bottom: 10px;
  margin-left: 10px;
  font-size: 18px;
  color: #d4cfcf;

  @media screen and (max-width: ${(p) => p.theme.breakpoints.xs.max}) {
    font-size: 15px;
  }
`

const TextContainer = styled.div`
  display: flex;
`

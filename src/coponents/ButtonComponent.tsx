import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

interface ButtonComponentProps {
  text: string
  background: string
  color: string
  handleClick?: (e: any) => void
}

const ButtonComponent = (props: ButtonComponentProps) => {
  const { text, background, color, handleClick } = props

  return (
    <ButtonItem style={{ background: background, color: color }} onClick={handleClick}>
      {text}
    </ButtonItem>
  )
}

export default ButtonComponent

const ButtonItem = styled(Button)`
  width: 140px;
  height: 45px;
  font-size: 15px;

  @media screen and (max-width: ${(p) => p.theme.breakpoints.xs.max}) {
    width: 100%;
  }
`

import React from 'react'
import styled from 'styled-components'

interface HeaderProps {
  text: string
}

const Header = (props: HeaderProps) => {
  const { text } = props

  return <HeaderItem>{text}</HeaderItem>
}

export default Header

const HeaderItem = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin: 0px;
`

import React from 'react'
import styled from 'styled-components'

interface LogoProps {
  url: string
  width: string
}

const Logo = (props: LogoProps) => {
  const { url, width } = props

  return <LogoItem alt="logo" src={`${url}`} style={{ width: width }} />
}

export default Logo

const LogoItem = styled.img`
  /* @media screen and (max-width: ${(p) => p.theme.breakpoints.xs.max}) {
    width: 50vw;
  } */
  /* width: 120px; */
`

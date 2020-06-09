import React from 'react'
import styled from 'styled-components'

interface ImageConverProps {
  url: string
}

const ImageConver = (props: ImageConverProps) => {
  const { url } = props

  return <ImageItem alt="cover" src={`${url}`} />
}

export default ImageConver

const ImageItem = styled.img`
  width: 100%;
  height: 100vh;

  @media screen and (max-width: ${(p) => p.theme.breakpoints.xs.max}) {
    height: 30vh;
  }
`

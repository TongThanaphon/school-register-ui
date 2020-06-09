import React from 'react'
import styled from 'styled-components'

import ImageCover from '../coponents/ImageCover'
import SchoolCodeForm from '../coponents/SchoolCodeForm'

const SchoolRegister = () => {
  return (
    <div>
      <RootContainer>
        <RootItem>
          <ImageCover url="https://storage.googleapis.com/assets.goscoreup.com/static/b2b/b2b_index.png" />
        </RootItem>
        <RootItem>
          <SchoolCodeForm />
        </RootItem>
      </RootContainer>
    </div>
  )
}

export default SchoolRegister

const RootContainer = styled.div`
  display: flex;
  background: #f7f7f7;

  @media screen and (max-width: ${(p) => p.theme.breakpoints.xs.max}) {
    display: flex;
    flex-direction: column;
  }
`
const RootItem = styled.div`
  flex-basis: 50%;
`

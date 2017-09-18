import React from 'react'
import styled from 'styled-components'
import { Square } from './Square'
import { Title } from './Title'

const AddIcon = styled.img`
  height: 66px;
  width: 66px;
  margin-top: 66px;
  margin-bottom: 39px;
`

export default function () {
  return (
    <Square>
      <AddIcon src='/assets/plus .png' />
      <Title>Create new app</Title>
    </Square>
  )
}

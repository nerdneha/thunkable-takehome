import React from 'react'
import styled from 'styled-components'
import { Square } from './Square'
import { Title } from './Title'

const SupportingText = styled.div`
  font-family: OpenSans;
  font-size: 14px;
  text-align: left;
  color: #c6c6c6;
  margin-top: 6px;
  margin-bottom: 10px;
`

const AppAction = styled.img`
  width: 30px;
  height: 30px;
`

function AppActions () {
  return (
    <div>
      <AppAction src='/assets/delete.png' />
      <AppAction src='/assets/download.png' />
    </div>
  )
}

const DemoIcon = styled.img`
  height: 85.1px;
  width: 85.1px;
  margin-top: 27px;
  margin-bottom: 32px;
`

export default function ({text, editTime}) {
  return (
    <Square className='demo-project'>
      <DemoIcon src='/assets/defaut icon.png' />
      <Title>{text}</Title>
      <SupportingText>Last edit: {editTime}</SupportingText>
      <AppActions />
    </Square>
  )
}

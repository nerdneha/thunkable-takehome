import React from 'react'
import styled from 'styled-components'
import Settings from './Settings'
import HomeButton from './HomeButton'

const NavigationStyle = styled.div`
height: 70px;
background-image: linear-gradient(to left, #ffffff, #f2f3f5);
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export default function () {
  return (
    <NavigationStyle>
      <HomeButton />
      <Settings />
    </NavigationStyle>
  )
}

import React from 'react'
import styled from 'styled-components'
import { Title } from './styles/Title'

const Select = styled.div`
  width: 132px;
  height: 40px;
  margin-left: 13.5px;
  background-color: #fefefe;
  border-radius: 2px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05);
  color: #6a6a6a;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TriangleIcon = styled.img`
  width: 12px;
  height: 12px;
  transform: rotate(90deg);
  margin-left: 10px;
`

function Dropdown () {
  return (
    <Select>
      <Title>Last edit</Title>
      <TriangleIcon src='/assets/dropdownTriangle.png' />
    </Select>
  )
}

const SortStyle = styled.div`
  display: flex;
  flex-flow: row;
  color: #7d7d7d;
  align-items: center;
  height: 40px;
`

export default function () {
  return (
    <SortStyle>
      <Title>Sort by:</Title>
      <Dropdown />
    </SortStyle>
  )
}

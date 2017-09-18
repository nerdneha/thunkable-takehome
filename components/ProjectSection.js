import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import Sort from './Sort'
import ProjectList from './ProjectList'

const SearchAndSortRow = styled.div`
  margin: 15px 191px 20px 115px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  height: 40px;
`

export default function () {
  return (
    <div>
      <SearchAndSortRow>
        <Search />
        <Sort />
      </SearchAndSortRow>
      <ProjectList />
    </div>
  )
}

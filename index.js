import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import ProjectSection from './components/ProjectSection'

const Line = styled.div`
  width: 1475px;
  border: solid 1px #d8d8d8;
`

const PageStyle = styled.div`
  max-width: 1477px;
  height: 983px;
  background-image: linear-gradient(to left, #fcf5f5, #f0f2ff);
  `

function Page () {
  return (
    <PageStyle>
      <NavBar />
      <Line />
      <ProjectSection />
    </PageStyle>
  )
}

ReactDOM.render(<Page />, window.root)

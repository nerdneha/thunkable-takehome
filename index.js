import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import NavigationBar from './components/NavigationBar'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/reducer'
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

const store = createStore(reducer)

function Page () {
  return (
    <Provider store={store}>
      <PageStyle>
        <NavigationBar />
        <Line />
        <ProjectSection />
      </PageStyle>
    </Provider>
  )
}

ReactDOM.render(<Page />, window.root)

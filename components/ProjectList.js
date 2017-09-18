import React from 'react'
import styled from 'styled-components'
import NewProject from './NewProject'
import DemoProject from './DemoProject'

const ProjectListStyles = styled.div`
  margin-left: 115px;
  margin-right: 192px;
  display: flex;
  flex-flow: row;
  .demo-project {
    margin-left: 30px;
  }
`

export default function () {
  return (
    <ProjectListStyles>
      <NewProject />
      <DemoProject text='Demo App 2' editTime='10-09-15' />
      <DemoProject text='Demo App 3' editTime='10-09-15' />
      <DemoProject text='Demo App 4' editTime='10-09-15' />
    </ProjectListStyles>
  )
}

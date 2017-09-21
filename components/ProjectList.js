import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import NewProject from './NewProject'
import DemoProject from './DemoProject'
import deleteProject from '../actions/deleteProject'

const ProjectListStyle = styled.div`
  margin-left: 115px;
  margin-right: 192px;
  display: flex;
  flex-flow: row;
  .demo-project {
    margin-left: 30px;
  }
`

export function ProjectList ({ projects }) {
  return (
    <ProjectListStyle>
      <NewProject />
      {
        projects.map(({name, editTime}, index) => {
          return <DemoProject {...{ name, editTime, index, key: name }} />
        })
      }
    </ProjectListStyle>
  )
}

const mapStateToProps = state => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps, {
  deleteProject
})(ProjectList)

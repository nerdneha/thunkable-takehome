import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Square } from './styles/Square'
import { Title } from './styles/Title'
import DeleteProject from './DeleteProject'
import deleteProject from '../actions/deleteProject'

const SupportingText = styled.div`
  font-family: OpenSans;
  font-size: 14px;
  text-align: left;
  color: #c6c6c6;
  margin-top: 6px;
  margin-bottom: 10px;
`

const DownloadProject = styled.img`
  width: 30px;
  height: 30px;
`

const DemoIcon = styled.img`
  height: 85.1px;
  width: 85.1px;
  margin-top: 27px;
  margin-bottom: 32px;
`

export function DemoProject ({name, editTime, index, deleteProject}) {
  const handleDelete = () => deleteProject(index)

  return (
    <Square className='demo-project'>
      <DemoIcon src='/assets/defaut icon.png' />
      <Title>{name}</Title>
      <SupportingText>Last edit: {editTime}</SupportingText>
      <div>
        <DeleteProject onDelete={handleDelete} />
        <DownloadProject src='/assets/download.png' />
      </div>
    </Square>
  )
}

export default connect(null, {
  deleteProject
})(DemoProject)

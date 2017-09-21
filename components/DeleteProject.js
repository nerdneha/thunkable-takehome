import React from 'react'
import styled from 'styled-components'

const DeleteProject = styled.img`
  width: 30px;
  height: 30px;
`

export default function ({ onDelete }) {
  return (
    <DeleteProject
      onClick={onDelete}
      src='/assets/delete.png'
    />
  )
}

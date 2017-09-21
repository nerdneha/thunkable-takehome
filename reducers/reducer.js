import { DELETE_PROJECT } from '../actionTypes'

const initialState = {
  projects: [
    {
      name: 'Demo App 2',
      editTime: '10-09-15'
    },
    {
      name: 'Demo App 3',
      editTime: '10-09-15'
    },
    {
      name: 'Demo App 4',
      editTime: '10-09-15'
    }
  ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case DELETE_PROJECT: {
      const projects = state.projects.filter((item, index) => {
        return index !== action.index
      })
      return {...state, projects}
    }
    default: {
      return state
    }
  }
}

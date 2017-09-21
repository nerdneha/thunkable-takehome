import { DELETE_PROJECT } from '../actionTypes'

export default function (index) {
  return {
    type: DELETE_PROJECT,
    index
  }
}

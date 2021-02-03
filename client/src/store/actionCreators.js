import { iecho } from '../services/api'

export const ADD_RESULT = 'ADD_RESULT'
export function addResult (text) {
  return function (dispatch) {
    return iecho(text).then(({ data }) => {
      dispatch({ type: ADD_RESULT, payload: data })
    })
  }
}

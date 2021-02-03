import { ADD_RESULT, DELETE_RESULT } from './actionCreators'

const initialState = {
  results: [],
  resultsId: 1
}

export default function reducer (state = initialState, { type, payload }) {
  switch (type) {
    case ADD_RESULT:
      return {
        ...state,
        results: state.results.concat({ ...payload, id: state.resultsId }),
        resultsId: state.resultsId + 1
      }
    case DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter((result) => result.id !== payload)
      }
    default:
      return state
  }
}

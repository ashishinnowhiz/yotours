import * as actionTypes from '../actions/holiday/holiday'

const initialState = {
  holiday: []
}
const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_FETCHING_HOLIDAY:
      return { ...state, isFetching: true }
    case actionTypes.SUCCESS_FETCHING_HOLIDAY:
      return {
        ...state,
        holiday: action.holiday,
        isFetching: false,
      }
    case actionTypes.FAIL_FETCHING_HOLIDAY:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}
export default headerReducer

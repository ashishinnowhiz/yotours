import * as actionTypes from '../actions/holidays/holidays'

const initialState = {
  holidays: []
}
const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_FETCHING_HOLIDAYS_City:
      return { ...state, isFetching: true }
    case actionTypes.SUCCESS_FETCHING_HOLIDAYS_City:
      return {
        ...state,
        holidays: action.holidays,
        isFetching: false,
      }
    case actionTypes.FAIL_FETCHING_HOLIDAYS_City:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}
export default headerReducer

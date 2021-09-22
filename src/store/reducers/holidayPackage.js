import * as actionTypes from "../actions/holidayPackage/holidayPackage"

const initialState = {
  holidays: [],
  relatedHolidays: [],
}
const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_FETCHING_HOLIDAYS_PACKAGE:
      return { ...state, isFetching: true }
    case actionTypes.SUCCESS_FETCHING_HOLIDAYS_PACKAGE:
      return {
        ...state,
        holidays: action.holidays.holidays[0],
        isFetching: false,
      }
    case actionTypes.FAIL_FETCHING_HOLIDAYS_PACKAGE:
      return {
        ...state,
        isFetching: false,
      }
    case actionTypes.START_FETCHING_RELATED_HOLIDAYS:
      return { ...state, isFetching: true }
    case actionTypes.SUCCESS_FETCHING_RELATED_HOLIDAYS:
      return {
        ...state,
        relatedHolidays: action.relatedHolidays,
        isFetching: false,
      }
    case actionTypes.FAIL_FETCHING_RELATED_HOLIDAYS:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}
export default headerReducer

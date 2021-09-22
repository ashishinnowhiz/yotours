import * as actionTypes from '../actions/header/header'

const initialState = {
  language: 'en',
  currencyConversion: 1,
  isFetching: false,
  currency: 'INR',
}
const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LANGUAGE:
      return { ...state, language: action.language }
    case actionTypes.START_CURRENCY_CONVERSION:
      return { ...state, isFetching: true }
    case actionTypes.SUCCESS_CURRENCY_CONVERSION:
      return {
        ...state,
        currencyConversion: action.currencyConversion,
        currency: action.currency,
        isFetching: false,
      }
    case actionTypes.FAIL_CURRENCY_CONVERSION:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}
export default headerReducer

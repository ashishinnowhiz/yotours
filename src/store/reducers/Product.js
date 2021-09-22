import * as actionTypes from '../actions/product/product'

const initialState = {
  product: []
}
const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_FETCHING_PRODUCT:
      return { ...state, isFetching: true }
    case actionTypes.SUCCESS_FETCHING_PRODUCT:
      return {
        ...state,
        product: action.product,
        isFetching: false,
      }
    case actionTypes.FAIL_FETCHING_PRODUCT:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}
export default headerReducer

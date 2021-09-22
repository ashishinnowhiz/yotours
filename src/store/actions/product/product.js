export const START_FETCHING_PRODUCT = 'START_FETCHING_PRODUCT'
export const SUCCESS_FETCHING_PRODUCT = 'SUCCESS_FETCHING_PRODUCT'
export const FAIL_FETCHING_PRODUCT = 'FAIL_FETCHING_PRODUCT'

const startProductFetch = () => {
  return {
    type: START_FETCHING_PRODUCT
  }
}

const successProductFetch = (data, currency) => {
  return {
    type: SUCCESS_FETCHING_PRODUCT,
    product:data,
  }
}
const failProductFetch = () => {
  return {
    type: FAIL_FETCHING_PRODUCT
  }
}
export const getProductDetail = (currency) => async (dispatch, getState, getApi) => {
  dispatch(startProductFetch());
  try {
    const result = await getApi.get(
      `product/products?id=${currency}`);
    if (result) {
      dispatch(successProductFetch(result.data.products));
    }
  } catch (error) {
    dispatch(failProductFetch(error));
  }
};
import axios from "axios";

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
export const START_CURRENCY_CONVERSION = 'START_CURRENCY_CONVERSION'
export const SUCCESS_CURRENCY_CONVERSION = 'SUCCESS_CURRENCY_CONVERSION'
export const FAIL_CURRENCY_CONVERSION = 'FAIL_CURRENCY_CONVERSION'

export const changeLanguage = (language) => async (dispatch, getState, getApi) => {
  dispatch({type: CHANGE_LANGUAGE, language: language});
}

const startCurrencyFetch = () => {
  return {
    type: START_CURRENCY_CONVERSION
  }
}
const successCurrencyFetch = (data, currency) => {
  return {
    type: SUCCESS_CURRENCY_CONVERSION,
    currencyConversion:data,
    currency
  }
}
const failCurrencyFetch = () => {
  return {
    type: FAIL_CURRENCY_CONVERSION
  }
}
export const currencyConverter = (currency) => async (dispatch, getState, getApi) => {
  dispatch(startCurrencyFetch());
  try {
    const result = await getApi.get(
      `get_exchange?from=INR&to=${currency}`);
    if (result) {
      dispatch(successCurrencyFetch(result.data, currency));
    }
  } catch (error) {
    dispatch(failCurrencyFetch(error));
  }
};
export const START_FETCHING_HOLIDAY = 'START_FETCHING_HOLIDAY'
export const SUCCESS_FETCHING_HOLIDAY = 'SUCCESS_FETCHING_HOLIDAY'
export const FAIL_FETCHING_HOLIDAY = 'FAIL_FETCHING_HOLIDAY'

const startHolidayFetch = () => {
  return {
    type: START_FETCHING_HOLIDAY
  }
}

const successHolidayFetch = (data, currency) => {
  return {
    type: SUCCESS_FETCHING_HOLIDAY,
    holiday:data,
  }
}
const failHolidayFetch = () => {
  return {
    type: FAIL_FETCHING_HOLIDAY
  }
}
export const getHolidayDetail = (countryId) => async (dispatch, getState, getApi) => {
  dispatch(startHolidayFetch());
  try {
    const result = await getApi.get(
      `holidays/getbycountry/${countryId}`);
    if (result && result.status === 200 && result.data) {
      dispatch(successHolidayFetch(result.data));
    }
  } catch (error) {
    dispatch(failHolidayFetch(error));
  }
};
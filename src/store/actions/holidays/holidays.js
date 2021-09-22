export const START_FETCHING_HOLIDAYS_City = 'START_FETCHING_HOLIDAYS_City'
export const SUCCESS_FETCHING_HOLIDAYS_City = 'SUCCESS_FETCHING_HOLIDAYS_City'
export const FAIL_FETCHING_HOLIDAYS_City = 'FAIL_FETCHING_HOLIDAYS_City'

const startHolidaysCityFetch = () => {
  return {
    type: START_FETCHING_HOLIDAYS_City
  }
}

const successHolidaysCityFetch = (data, currency) => {
  return {
    type: SUCCESS_FETCHING_HOLIDAYS_City,
    holiday:data,
  }
}
const failHolidaysCityFetch = () => {
  return {
    type: FAIL_FETCHING_HOLIDAYS_City
  }
}
export const getHolidaysCityDetail = (cityId) => async (dispatch, getState, getApi) => {
  dispatch(startHolidaysCityFetch());
  try {
    const result = await getApi.get(
      `city_guide/response/${cityId}`);
    if (result && result.status === 200 && result.data) {
      dispatch(successHolidaysCityFetch(result.data));
    }
  } catch (error) {
    dispatch(failHolidaysCityFetch(error));
  }
};

export const START_FETCHING_HOLIDAYS_PACKAGE = 'START_FETCHING_HOLIDAYS_PACKAGE'
export const SUCCESS_FETCHING_HOLIDAYS_PACKAGE = 'SUCCESS_FETCHING_HOLIDAYS_PACKAGE'
export const FAIL_FETCHING_HOLIDAYS_PACKAGE = 'FAIL_FETCHING_HOLIDAYS_PACKAGE'
export const START_FETCHING_RELATED_HOLIDAYS = 'START_FETCHING_RELATED_HOLIDAYS'
export const SUCCESS_FETCHING_RELATED_HOLIDAYS = 'SUCCESS_FETCHING_RELATED_HOLIDAYS'
export const FAIL_FETCHING_RELATED_HOLIDAYS = 'FAIL_FETCHING_RELATED_HOLIDAYS'

const startHolidaysPackageFetch = () => {
  return {
    type: START_FETCHING_HOLIDAYS_PACKAGE
  }
}

const successHolidaysPackageFetch = (data, currency) => {
  return {
    type: SUCCESS_FETCHING_HOLIDAYS_PACKAGE,
    holidays:data,
  }
}
const failHolidaysPackageFetch = () => {
  return {
    type: FAIL_FETCHING_HOLIDAYS_PACKAGE
  }
}
export const getHolidaysPackageDetail = (holidayId) => async (dispatch, getState, getApi) => {
  dispatch(startHolidaysPackageFetch());
  try {
    const result = await getApi.get(
      `holidays?id=${holidayId}`);
    if (result && result.status === 200 && result.data) {
      dispatch(successHolidaysPackageFetch(result.data));
    }
  } catch (error) {
    dispatch(failHolidaysPackageFetch(error));
  }
};

const startRelatedHolidayFetch = () => {
  return {
    type: START_FETCHING_RELATED_HOLIDAYS
  }
}

const successRelatedHolidayFetch = (data, currency) => {
  return {
    type: SUCCESS_FETCHING_RELATED_HOLIDAYS,
    relatedHolidays:data,
  }
}
const failRelatedHolidayFetch = () => {
  return {
    type: FAIL_FETCHING_RELATED_HOLIDAYS
  }
}
export const getRelatedHoliday = (holidayId) => async (dispatch, getState, getApi) => {
  dispatch(startRelatedHolidayFetch());
  try {
    const result = await getApi.get(
      `holidays/getrelated/${holidayId}`);
    if (result && result.status === 200 && result.data) {
      dispatch(successRelatedHolidayFetch(result.data));
    }
  } catch (error) {
    dispatch(failRelatedHolidayFetch(error));
  }
};
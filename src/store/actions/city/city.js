import axios from 'axios'
import * as actionTypes from './actionTypes'

const CancelToken = axios.CancelToken.source()
const token = CancelToken.token

const cancelApiRequest = () => {
  CancelToken.cancel('Operation canceled by the user.')
}

const fetchCityStart = () => {
  return {
    type: actionTypes.CITY_FETCH_START,
  }
}

const fetchCitySuccess = (data) => {
  return {
    type: actionTypes.CITY_FETCH_SUCCESS,
    data: data,
  }
}

const fetchCityFailure = (error) => {
  return {
    type: actionTypes.CITY_FETCH_FAILURE,
    error: error,
  }
}

const fetchCityDetails = (id) => async (dispatch, getState, getApi) => {
  dispatch(fetchCityStart())
  try {
    const result = await getApi.get(
      `City/city_response/${id}`,
      { cancelToken: token }
    )
    if (result && result.status === 200 && result.data) {
      dispatch(fetchCitySuccess(result.data))
    }
  } catch (error) {
    dispatch(fetchCityFailure(error))
  }
}

const fetchCityBlogStart = () => {
  return {
    type: actionTypes.CITY_BLOGS_FETCH_START,
  }
}

const fetchCityBlogSuccess = (blogs, city) => {
  return {
    type: actionTypes.CITY_BLOGS_FETCH_SUCCESS,
    blogs: blogs,
    city: city
  }
}

const fetchCityBlogFailure = (error) => {
  return {
    type: actionTypes.CITY_BLOGS_FETCH_FAILURE,
    error: error,
  }
}

const fetchCityBlogDetails = (id) => async (dispatch, getState, getApi) => {
  dispatch(fetchCityBlogStart())
  try {
    const result = await getApi.get(
      `city_blog/city_blogs/${id}`,
      { cancelToken: token }
    )
    if (result && result.status === 200 && result.data) {
      const {
        blogs,
        city: { city },
      } = result.data
      dispatch(fetchCityBlogSuccess(blogs, city))
    }
  } catch (error) {
    dispatch(fetchCityBlogFailure(error))
  }
}

const fetchStoryTellerStart = () => {
  return {
    type: actionTypes.STORY_TELLER_FETCH_START,
  }
}

const fetchStoryTellerSuccess = (city, storyTeller) => {
  return {
    type: actionTypes.STORY_TELLER_FETCH_SUCCESS,
    city: city,
    storyTeller: storyTeller,
  }
}

const fetchStoryTellerFailure = (error) => {
  return {
    type: actionTypes.STORY_TELLER_FETCH_FAILURE,
    error: error,
  }
}

const fetchStoryTellerDetails = (id) => async (dispatch, getState, getApi) => {
  dispatch(fetchStoryTellerStart())
  try {
    const result = await getApi.get(
      `storyteller/storytellers/${id}`,
      { cancelToken: token }
    )
    if (result && result.status === 200 && result.data) {
      const {
        city: { city },
        storyTellers: { StoryTellers },
      } = result.data
      dispatch(fetchStoryTellerSuccess(city, StoryTellers))
    }
  } catch (error) {
    dispatch(fetchStoryTellerFailure(error))
  }
}

export const actions = {
  fetchCityDetails,
  fetchCityBlogDetails,
  fetchStoryTellerDetails,
  cancelApiRequest,
}

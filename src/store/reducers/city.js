import * as actionTypes from "../actions/city/actionTypes";

const initial_state = {
  isFetching: false,
  cityDetails: {},
  cityBlogs: [],
  stroyTeller: [],
  isError: null,
};

const cityReducer = (state = initial_state, action) => {
  switch (action.type) {
    // main city reducer data
    case actionTypes.CITY_FETCH_START:
      return { ...state, isFetching: true };
    case actionTypes.CITY_FETCH_SUCCESS:
      return {
        ...state,
        cityDetails: action.data,
        isFetching: false,
      };
    case actionTypes.CITY_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        cityDetails: {},
        isError: action.error,
      };
    //city blog page reducer data
    case actionTypes.CITY_BLOGS_FETCH_START:
      return { ...state, isFetching: true };
    case actionTypes.CITY_BLOGS_FETCH_SUCCESS:
      return {
        ...state,
        cityBlogs: action.blogs,
        cityDetails: action.city,
        isFetching: false,
      };
    case actionTypes.CITY_BLOGS_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        cityBlogs: [],
        isError: action.error,
      };
      //story teller for city page reducer data
    case actionTypes.STORY_TELLER_FETCH_START:
      return { ...state, isFetching: true };
    case actionTypes.STORY_TELLER_FETCH_SUCCESS:
      return {
        ...state,
        stroyTeller: action.storyTeller,
        cityDetails: action.city,
        isFetching: false,
      };
    case actionTypes.STORY_TELLER_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        stroyTeller: [],
        isError: action.error,
      };

    default:
      return state;
  }
};

export default cityReducer;

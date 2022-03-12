import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USER,
  SET_USER_LOADING,
} from '../types';

/* eslint-disable */
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        user: {},
        repos: [],
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        userLoading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        userLoading: false,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: {},
        repos: [],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_USER_LOADING:
      return {
        ...state,
        userLoading: true,
      };
    default:
      return state;
  }
};

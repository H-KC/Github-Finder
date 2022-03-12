import { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import axios from 'axios';

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USER,
  SET_USER_LOADING,
} from '../types';

let githubClientId;
let githubClientSecret;
if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    userLoading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search users
  const searchUsers = (text) => {
    setLoading();
    axios
      .get(
        `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
      )
      .then((res) => {
        dispatch({
          type: SEARCH_USERS,
          payload: res.data.items,
        });
      });
  };
  //get User
  const getUser = (login) => {
    setUserLoading();
    axios
      .get(`https://api.github.com/users/${login}`)
      .then((res) => {
        dispatch({
          type: GET_USER,
          payload: res.data,
        });
        getRepos(login);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  // get repos
  const getRepos = (login) => {
    setUserLoading();
    axios
      .get(
        `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc`,
      )
      .then((res) => {
        dispatch({
          type: GET_REPOS,
          payload: res.data,
        });
      });
  };
  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  //Clear a user
  const clearUser = () => dispatch({ type: CLEAR_USER });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  //SetUser
  const setUserLoading = () => dispatch({ type: SET_USER_LOADING });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        userLoading: state.userLoading,
        setLoading,
        clearUsers,
        clearUser,
        searchUsers,
        getUser,
        getRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;

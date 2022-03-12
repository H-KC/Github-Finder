import { clear } from '@testing-library/user-event/dist/clear';
import React, { Fragment, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import User from './User';
import Spinner from '../layout/Spinner';
const UserItem = ({ user: { avatar_url, login } }) => {
  const githubContext = useContext(GithubContext);

  const { user, repos, getUser, clearUser, userLoading } = githubContext;

  const handleClick = () => {
    getUser(login);
  };

  //targeted user
  const targeted = repos.length > 0 && user.login === login;

  return (
    <div className='user-card'>
      {userLoading && targeted ? (
        <Spinner />
      ) : (
        <Fragment>
          {targeted && <User user={user} repos={repos} />}
          <img src={avatar_url} alt='' style={imgStyle} />
          <div className='user-name'>
            <h4>{login}</h4>
          </div>
          {targeted ? (
            <div className='expand close'>
              <button onClick={clearUser}>close</button>
            </div>
          ) : (
            <div className='expand'>
              <button onClick={handleClick}>More</button>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};
const imgStyle = {
  width: '130px',
  height: '130px',
  borderRadius: '50%',
  border: '1px dotted black',
};

export default UserItem;

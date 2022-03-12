import React, { Fragment, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='users-container'>
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

export default Users;

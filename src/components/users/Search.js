import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
const Search = () => {
  // github context
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');
  //submitting a form
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      //alert here
      alertContext.setAlert('Please fill in the input !!', 'danger');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  // handle change of user input
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const clearUsers = () => {
    githubContext.clearUsers();
  };
  return (
    <div className='search-part'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Search a user...'
          className='user-input'
          value={text}
          onChange={handleChange}
        />
        <div className='form-btns'>
          <input type='submit' value='Search' className='btn btn-primary' />
          {githubContext.users.length > 0 && (
            <input
              type='button'
              value='Clear'
              className='btn btn-secondary'
              onClick={clearUsers}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;

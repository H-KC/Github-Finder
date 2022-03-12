import React from 'react';

const User = ({ user, repos }) => {
  const {
    name,
    public_repos,
    followers,
    following,
    location,
    company,
    hireable,
    html_url,
  } = user;
  return (
    <div className='backdrop'>
      <div className='info-card'>
        <div className='info'>
          <h2>
            <a href={html_url}>{name}</a>
          </h2>
          <div className='details'>
            <h5>
              Location : {location} | Company : {company} | Hirable :{' '}
              {hireable ? (
                <i className='fa-solid fa-check'></i>
              ) : (
                <i className='fa-solid fa-xmark'></i>
              )}
            </h5>
          </div>
          <div className='details'>
            <h5>
              Followers : {followers} | Following : {following} | Public Repos :
              {public_repos}
            </h5>
          </div>
          <div className='repos'>
            <h3>Repos :</h3>
            {repos.map((repo) => {
              return (
                <div className='repo' key={repo.id}>
                  <a href={repo.html_url}>{repo.name.substring(0, 5)}...</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className='repos'></div>
      </div>
    </div>
  );
};

export default User;

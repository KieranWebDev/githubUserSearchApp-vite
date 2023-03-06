import React from 'react';

import './SearchResults.css';
export default function SearchResults({ userData }) {
  const {
    name,
    avatar_url,
    html_url,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company,
  } = userData;
  return (
    <div className="search-results">
      <img src={avatar_url} alt="avator pic" />
      <h1>{name}</h1>
      <h3>
        <a href={html_url} target="_blank" rel="noreferrer">
          @{login}
        </a>
      </h3>
      <p>{created_at}</p>
      {bio && <p>{bio}</p>}
      {!bio && <p>This user has not completed their bio section</p>}
      <div>
        <dl>
          <dt>Repos</dt>
          <dd>{public_repos}</dd>
          <dt>Followers</dt>
          <dd>{followers}</dd>
          <dt>Following</dt>
          <dd>{following}</dd>
        </dl>
      </div>
      <p>{location}</p>
      {!userData.location && <p>not available</p>}
      <p>{blog}</p>
      {!blog && <p>not available</p>}
      <p>{twitter_username}</p>
      {!twitter_username && <p>not available</p>}
      <p>{company}</p>
      {!company && <p>not available</p>}
    </div>
  );
}

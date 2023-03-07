import React from 'react';

import locationImg from '../../images/icon-location.svg';
import companyImg from '../../images/icon-company.svg';
import blogImg from '../../images/icon-website.svg';
import twitterImg from '../../images/icon-twitter.svg';

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
      <img className="profile-img" src={avatar_url} alt="avator pic" />
      <div className="title-info">
        <h1>{name}</h1>
        <h3>
          <a href={html_url} target="_blank" rel="noreferrer">
            @{login}
          </a>
        </h3>
        <p>{created_at}</p>
      </div>
      {bio && <p className="bio">{bio}</p>}
      {!bio && (
        <p className="bio">This user has not completed their bio section</p>
      )}

      <table className="repo-info">
        <thead>
          <tr>
            <td>Repos</td>
            <td>Followers</td>
            <td>Following</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{public_repos}</td>
            <td>{followers}</td>
            <td>{following}</td>
          </tr>
        </tbody>
      </table>

      <ul className="contact-info">
        <li>
          <img src={locationImg} alt="locationImg" />
          {location ? (
            <span>{location}</span>
          ) : (
            <span className="not-avail">Not Available</span>
          )}
        </li>
        <li>
          <img src={blogImg} alt="blogImg" />
          {blog ? (
            <a href={blog} target="_blank">
              {blog}
            </a>
          ) : (
            <span className="not-avail">Not Available</span>
          )}
        </li>
        <li>
          <img src={twitterImg} alt="twitterImg" />
          {twitter_username ? (
            <a href={`https://twitter.com/${twitter_username}`} target="_blank">
              {twitter_username}
            </a>
          ) : (
            <span className="not-avail">Not Available</span>
          )}
        </li>
        <li>
          <img src={companyImg} alt="companyImg" />
          {company ? (
            <span>{company}</span>
          ) : (
            <span className="not-avail">Not Available</span>
          )}
        </li>
      </ul>
      {/* <p>{location}</p>
        {!userData.location && <p>Not available</p>}

      </ul>
        <p>{location}</p>
        {!userData.location && <p>Not available</p>}
        <p>{blog}</p>
        {!blog && <p>Not available</p>}
        <p>{twitter_username}</p>
        {!twitter_username && <p>Not available</p>}
        <p>{company}</p>
        {!company && <p>Not available</p>} */}
    </div>
  );
}

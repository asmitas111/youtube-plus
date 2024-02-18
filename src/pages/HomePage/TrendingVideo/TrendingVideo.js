import React from 'react';
import PropTypes from 'prop-types';

const TrendingVideo = ({ thumbnailUrl, title, channel, views, publishedDate, description }) => {
  // console.log(props);
  // props are objects
  // props are read-only
  // props can have children
  // props are used for receiving data from parent comp

  console.log('is it re-rendered?');
  
  return (
    <div className="card">
      <img
        src={thumbnailUrl}
        className="card-img-top" alt="..." />
      <div className="card-body">
        <a href="/" className="card-link">
          <h5 className="card-title">
            {title}
          </h5>
        </a>
        <p>{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{channel}</li>
        <li className="list-group-item">{views} || {publishedDate}</li>
      </ul>
    </div>
  );
};

TrendingVideo.propTypes = {
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  channel: PropTypes.string,
  views: PropTypes.string,
  publishedDate: PropTypes.string
};

export default TrendingVideo;
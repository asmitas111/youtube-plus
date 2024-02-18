import React from 'react';
import PropTypes from 'prop-types';

const LatestVideo = ({ thumbnailUrl, title, channel, views, publishedDate, children }) => { //receiving props
  // console.log(props);
  // props are objects
  // props are read-only
  // props can have children
  // props are used for receiving data from parent comp

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
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{channel}</li>
        <li className="list-group-item">{views} || {publishedDate}</li>
      </ul>
    </div>
  );
};

LatestVideo.propTypes = {
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  channel: PropTypes.string,
  views: PropTypes.string,
  publishedDate: PropTypes.string,
  children: PropTypes.string
};

export default LatestVideo ;
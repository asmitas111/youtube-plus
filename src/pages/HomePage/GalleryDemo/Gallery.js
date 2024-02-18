import React from 'react';
import image1 from '../../../assets/Images/Dubai.jpg';
import image2 from '../../../assets/Images/London.jpg';
import image3 from '../../../assets/Images/NYC.jpg';
import image4 from '../../../assets/Images/Paris.jpg';

const Gallery = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={image1} alt="dubai" width="280" />
      </div>
      <div className="col-md-3">
        <img src={image2} alt="london" width="280" />
      </div>
      <div className="col-md-3">
        <img src={image3} alt="nyc" width="280" height="187" />
      </div>
      <div className="col-md-3">
        <img src={image4} alt="paris" width="280" />
      </div>
    </div>
  );
};

export default Gallery;

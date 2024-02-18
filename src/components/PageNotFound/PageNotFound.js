import React from 'react';
import { useNavigate } from 'react-router-dom';

 const PageNotFound = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }

  return (
    <div className="text-center">
      <h2>PageNotFound</h2>
      <p> Error!  Wrong Url entered or the page you are trying to reach has been moved or deleted!</p>  
      <button type="button" onClick= {handleClick} className="btn btn-primary">
        Go to Home Page
      </button>
    </div>
  );
};

export default PageNotFound;
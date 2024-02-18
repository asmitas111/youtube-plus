import { PropTypes } from 'prop-types';
import React, { useState } from 'react';

const CompanyInfo = (props) => {
  const [countryNameInput, setCountryName] = useState('USA');

  return (
    <div>
      <h2>CompanyInfo | Testing Props, styles, PlaceHolder Text, Events, States, Snapshot</h2>
      <h3 data-testid="companyName">Company Name: Cognizant</h3>
      <p data-testid="foundedYear" style={{ color: 'rgb(0, 255, 0)' }}>
        Founded In: {props.foundedYear}
      </p>
      <p data-testid="employeeCountElement">Employee :{props.employeeCount}</p>
      <input
        type="text"
        placeholder="Enter Your Country Name"
        value={countryNameInput}
        onChange={(event) => {
          setCountryName(event.target.value);
        }}
      />
      <p data-testid="visitCognizant">Visit Cognizant {countryNameInput} Website</p>
      <button data-testid="buttonCheck" className="btn btn-primary">
        Join Cognizant
      </button>
    </div>
  );
};

CompanyInfo.propTypes = {
  foundedYear: PropTypes.string,
  employeeCount: PropTypes.string
};

export default CompanyInfo;

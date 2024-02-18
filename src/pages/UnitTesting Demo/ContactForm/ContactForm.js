import axios from 'axios';
import React, { useState } from 'react';

const ContactForm = () => {
  const [isSaved, setIsSaved] = useState(false);

  const [formState, setFormState] = useState({
    firstName: '',
    phone: ''
  });

  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState); // form data
    // the above data can be submitted to the backend
    // TODO: Submit the above data to the REST API
    // url: https://jsonplaceholder.typicode.com/users
    // http method: POST
    // rest api client tool: axios / fetch
    setIsSaved(true);
    axios
      .post('http://localhost:3004/profile', formState)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row">
      <h4>ContactForm | Testing Form in React</h4>
      <form className="col-md-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput">Enter Name: </label>
          <input
            type="text"
            id="nameInput"
            className="form-control"
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phoneInput">Enter Phone</label>
          <input
            type="number"
            id="phoneInput"
            className="form-control"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mt-3">
          <button type="submit" className="btn btn-primary" disabled={formState.firstName === ''}>
            Submit
          </button>
          <div>
            {isSaved ? (
              <div data-testid="isSaved" className="alert alert-success">
                Saved Successfully
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;

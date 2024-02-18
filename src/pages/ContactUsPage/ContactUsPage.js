import React, { useContext } from 'react';
import { PageContext } from '../../contexts/PageContext';
import { Helmet } from 'react-helmet';

const ContactUsPage = () => {
  // Step 3 of context api
  // recieve data from app.js using useContext() Hook
  const context = useContext(PageContext);
  console.log(context);

  return (
    <div>
      <Helmet>
        <title>Contact Us Page</title>
      </Helmet>
      <h1>ContactUsPage</h1>
      <p>Is the user Authenticated? {context.isLoggedIn ? 'Yes' : 'No'}</p>
      <p>Last Login: {context.lastLogin}</p>
    </div>
  );
};

export default ContactUsPage;

import React from 'react';
//import { useState, useMemo } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <div className="products">
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <h1>AboutPage</h1>
      <p>
        Founding and initial growth (2005–2006) YouTube was founded by Steve Chen, Chad Hurley, and
        Jawed Karim. The trio were early employees of PayPal, which left them enriched after the
        company was bought by eBay. Hurley had studied design at the Indiana University of
        Pennsylvania, and Chen and Karim studied...
      </p>
      <div className="productsNav">
        {/*<Link to="/AboutPage/Contact"> Contact </Link>*/}
        <Link to="/Queries"> Address your queries </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutPage;

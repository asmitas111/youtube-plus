import React from 'react';
import Bye from './Bye/Bye';
import Hello from './Hello/Hello';
import LastLogin from './LastLogin/LastLogin';
import applyStyles from '../../hoc/applyStyles';
import ErrorBoundary from '../../containers/shared/ErrorBoundary/ErrorBoundary';
import Calculator from './Calculator/Calculator';
import { Helmet } from 'react-helmet';

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const HocDemoPage = () => {
  return (
    <div>
      <Helmet>
        <title>Hoc Demo Page</title>
      </Helmet>
      <h2>Render Props Pattern</h2>
      <LastLogin>
        <p>Last login: 4/Jan/2023, 6pm</p>
        <p>Updated at: 3PM Today</p>
      </LastLogin>

      <LastLogin>
        <p>You are logged out. DO you want to Login again?</p>
        <p>Login feature not built in this app</p>
      </LastLogin>

      <hr />
      <h2>Higher Order Components Pattern</h2>
      <StyledHello name="Dear Associate" />
      <StyledBye name="From XYZ" />

      <hr />
      <h2>Error Boundary Demo</h2>
      <ErrorBoundary>
        <Calculator />
      </ErrorBoundary>
    </div>
  );
};

export default HocDemoPage;

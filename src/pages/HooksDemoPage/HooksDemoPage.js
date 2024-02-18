import React from 'react';
import Blog from './Blog/Blog';
import MyAccount from './MyAccount/MyAccount';
import Todos from './Todos/Todos';

import { Helmet } from 'react-helmet';
import ComputeExample from './ComputeExample/ComputeExample';

const HooksDemoPage = () => {
  return (
    <div>
      <Helmet>
        <title>HooksDemo Page</title>
      </Helmet>
      <h1>HooksDemoPage</h1>
      <MyAccount />

      <hr />
      <h2>useEffect() - Hook Demo</h2>
      <Blog />

      <hr />
      <h2>useEffect() - Todos Demo</h2>
      <Todos />

      <hr />
      <h2>useMemo() </h2>
      <ComputeExample />
    </div>
  );
};

export default HooksDemoPage;

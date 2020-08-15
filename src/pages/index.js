import React from 'react';

import Layout from '../components/layout';
import {ExampleButton} from '../components/button';

export default () => (
  <Layout>
    <h1>
      Hello from Gatsby
      <div>
        <ExampleButton>Click Me</ExampleButton>
      </div>
    </h1>
  </Layout>
);

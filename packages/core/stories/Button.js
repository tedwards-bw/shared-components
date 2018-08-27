import React from 'react';
import Button from '../src/Button';

export default () => (
  <div>
    <h1>Testing</h1>
    <p>Oh, the humble button. How many possibilities arise from this single entity.</p>
    <Button color="primary" size="large">Primary Large</Button>
    <Button color="primary" size="medium">Primary Medium</Button>
    <Button color="primary" size="small">Primary Small</Button>
  </div>
)

export const settings = {
  info: {
    propTables: [ Button ]
  }
}

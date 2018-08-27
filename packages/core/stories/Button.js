import React from 'react';
import Button from '../src/Button';

export default () => (
  <div>
    <p>Comparison of Button Sizes</p>
    <Button size="large">Primary Large</Button>
    <Button size="medium">Primary Medium</Button>
    <Button size="small">Primary Small</Button>
    <p>Outline Button - Meant for secondary usage.</p>
    <Button variant="outlined">Secondary Button</Button>
    <p>Outline Button - Meant for secondary usage.</p>
    <Button color="error">Danger</Button>
  </div>
)

export const settings = {
  info: {
    propTables: [ Button.Naked ]
  }
}

import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import BandwidthProvider from '../src/styles/BandwidthProvider';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

//create bandwidth provider decorator
const BandwidthDecorator = (storyFn) => (
  <BandwidthProvider>
    { storyFn() }
  </BandwidthProvider>
)

addParameters({
  info: {
    inline: true,
    header: false,
    source: false,
    excludedPropTypes: ['onMouseUp','className','classes']
  }
});


addDecorator(BandwidthDecorator);

configure(loadStories, module);

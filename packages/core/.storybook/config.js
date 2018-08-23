import { configure, addParameters } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  info: {
    inline: true,
    header: false,
    source: false,
    excludedPropTypes: ['onMouseUp','className','classes']
  }
})

configure(loadStories, module);

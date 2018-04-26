import React from 'react';

export default ({ children, to, ...rest }) => (
  <a {...rest} href={to}>
    {children}
  </a>
);

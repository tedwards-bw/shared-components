import React from 'react';

/**
 * A HOC that provides a bit more intelligence / intuitive
 * function to the React-Router Link
 */

const isExternal = url => /^(https?:)*\/\//.test(url);

export default WrappedLink => ({ to, children, ...rest }) => (
  <WrappedLink
    to={to}
    {...(isExternal(to) ? { target: '_blank', rel: 'noopener' } : {})}
    external={isExternal(to)}
    {...rest}
  >
    {children}
  </WrappedLink>
);

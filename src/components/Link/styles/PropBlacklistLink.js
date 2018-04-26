import React from 'react';
import { Link } from 'react-router-dom';
import { omit } from 'lodash';

const blacklist = ['appearFocused', 'icon', 'external'];

/**
 * Prevents the `newTab` or `appearFocused` prop from being passed to Link,
 * which emits errors when it receives props it doesn't expect.
 */
export default ({ children, ...rest }) => (
  <Link {...omit(rest, blacklist)}>{children}</Link>
);

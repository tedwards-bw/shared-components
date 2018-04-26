import React from 'react';
import NativeA from './NativeALinkImplementation';
import { omit } from 'lodash';

const propBlacklist = [
  'appearFocused',
  'icon',
  'external',
  'passAllPropsToImplementation',
];

export default ({
  LinkImplementation = NativeA,
  passAllPropsToImplementation,
  children,
  ...rest
}) => (
  <LinkImplementation
    {...(passAllPropsToImplementation ? rest : omit(rest, propBlacklist))}
  >
    {children}
  </LinkImplementation>
);

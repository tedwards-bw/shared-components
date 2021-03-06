import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const TableCell = styled.td`
  background: transparent;
  text-align: left;
  border-right: ${get('thicknesses.normal')} solid ${get('colors.shadow.light')};
  white-space: nowrap;
  padding: ${get('spacing.small')} ${get('spacing.medium')};
  transition: 0.2s ease all;

  &:last-child {
    border-right: none;
  }
`;

TableCell.defaultProps = {
  children: String.fromCharCode(160), // &nbsp;
};

export default TableCell;

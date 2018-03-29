import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  border-width: ${get('thicknesses.normal')};
  border-color: ${get('colors.gray.border')};
  border-style: solid;

  &:not(:first-child) {
    margin-top: -${get('thicknesses.normal')};
  }

  background: ${props =>
    props.disabled ? get('colors.background.disabled')(props) : 'transparent'};
`;

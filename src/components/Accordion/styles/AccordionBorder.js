import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  border-top: ${get('thicknesses.normal')} ${get('colors.gray.border')} solid;

  &:last-child {
    border-bottom: ${get('thicknesses.normal')} ${get('colors.gray.border')}
      solid;
  }

  background: ${props =>
    props.disabled ? get('colors.background.disabled')(props) : 'transparent'};
`;

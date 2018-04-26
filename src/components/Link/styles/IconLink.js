import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';
import icons from 'components/Icon/icons';
import Link from './PropBlacklistLink';
import Icon from 'components/Icon';

const focusAfterStyles = css`
  height: calc(100% + 0.2em);
  width: calc(100% + 0.6em);
  left: -0.3em;
  opacity: 0.125;
  transition: height 0.15s ease, width 0.15s ease, left 0.15s ease,
    opacity 0s ease;
`;

const color = get('colors.primary.alternate');

const IconLink = styled(Link)`
  color: ${color};
  font-family: ${get('fonts.brand')};

  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
  height: auto;
  margin: auto;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;

  &:focus {
    outline: none;
  }

  &:active {
    color: ${get('colors.primary.default')};
  }

  &::after {
    content: '';
    background: ${color};
    border-radius: 2em;
    height: 1px;
    width: 100%;
    position: absolute;
    bottom: -0.1em;
    left: 0;
    transition: height 0.15s ease, width 0.15s ease, left 0.15s ease,
      opacity 0.25s ease;

    ${({ appearFocused }) =>
      appearFocused ? focusAfterStyles : 'opacity: 0;'};
  }

  &:hover::after,
  &:focus::after {
    ${focusAfterStyles};
  }

  &::before {
    font-family: ${get('fonts.icon')};
    content: ${({ icon }) => (!!icon ? `"${icons(icon)}"` : '')};
    font-weight: normal;
    margin-right: ${({ icon, children }) =>
      !!icon && !!children ? '0.5em' : '0'};
  }

  & > ${Icon} {
    font-weight: normal;
  }
`;

IconLink.Negative = styled(IconLink)`
  color: ${get('colors.negative.default')};

  &:active {
    color: ${get('colors.negative.dark')};
  }

  &::after {
    background: ${get('colors.negative.default')};
  }
`;

IconLink.Positive = styled(IconLink)`
  color: ${get('colors.positive.default')};

  &:active {
    color: ${get('colors.positive.dark')};
  }

  &::after {
    background: ${get('colors.positive.default')};
  }
`;

IconLink.Dark = styled(IconLink)`
  color: ${get('colors.primary.dark')};

  &:active {
    color: ${get('colors.primary.dark')};
  }

  &::after {
    background: ${get('colors.primary.dark')};
  }
`;

IconLink.Inverted = styled(IconLink)`
  color: ${get('colors.text.inverted')};

  &:active {
    color: ${get('colors.text.inverted')};
  }

  &::after {
    background: ${get('colors.text.inverted')};
  }
`;

export default IconLink;

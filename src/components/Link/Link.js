import React from 'react';
import PropTypes from 'prop-types';
import linkExtensions from './linkExtensions';
import TextLink from './styles/TextLink';
import IconLink from './styles/IconLink';
import TransparentLink from './styles/TransparentLink';

const Link = linkExtensions(TextLink);
Link.Icon = linkExtensions(IconLink);
Link.Positive = linkExtensions(TextLink.Positive);
Link.Negative = linkExtensions(TextLink.Negative);
Link.Dark = linkExtensions(TextLink.Dark);
Link.Inverted = linkExtensions(TextLink.Inverted);
Link.Wrap = linkExtensions(TransparentLink);
Link.Icon.Positive = linkExtensions(IconLink.Positive);
Link.Icon.Negative = linkExtensions(IconLink.Negative);
Link.Icon.Dark = linkExtensions(IconLink.Dark);
Link.Icon.Inverted = linkExtensions(IconLink.Inverted);

Link.propTypes = {
  /**
   * The URL to route to. Maybe external or internal. Different props
   * will be passed to the underlying element based on external or internal
   * URLs; all external URLs will open in a new tab and display a special
   * effect.
   */
  to: PropTypes.string,
  /**
   * Programatically control whether the link appears to be in the focused
   * state.
   */
  appearFocused: PropTypes.bool,
  /**
   * Content (text) to render within the link.
   */
  children: PropTypes.node.isRequired,
};
Link.Positive.propTypes = Link.Negative.propTypes = Link.Dark.propTypes = Link.Inverted.propTypes =
  Link.propTypes;
Link.defaultProps = Link.Positive.defaultProps = Link.Negative.defaultProps = Link.Dark.defaultProps = Link.Inverted.defaultProps = {
  to: '#',
  appearFocused: false,
};

Link.Icon.propTypes = {
  /**
   * The URL to route to.
   */
  to: PropTypes.string,
  /**
   * The name of the icon to show
   */
  icon: PropTypes.string,
  /**
   * Programatically control whether the link appears to be in the focused
   * state.
   */
  appearFocused: PropTypes.bool,
  /**
   * Optional content to render alongside the icon
   */
  children: PropTypes.node,
};
Link.Icon.Positive.propTypes = Link.Icon.Negative.propTypes = Link.Icon.Dark.propTypes = Link.Icon.Inverted.propTypes =
  Link.Icon.propTypes;
Link.Icon.defaultProps = Link.Icon.Positive.defaultProps = Link.Icon.Negative.defaultProps = Link.Icon.Inverted.defaultProps = {
  to: '#',
  icon: 'help',
  appearFocused: false,
  children: null,
};

Link.Wrap.propTypes = {
  /**
   * The URL to route to.
   */
  to: PropTypes.string,
  /**
   * Content of any type to render within the link
   */
  children: PropTypes.node.isRequired,
};
Link.Wrap.defaultProps = { to: '#' };

/**
 * Creates a local or remote link using React Router's Link
 * component. External / internal is inferred by the URL provided to `to`
 */
export default Link;

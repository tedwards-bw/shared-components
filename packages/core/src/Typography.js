import React from 'react';
import MuiTypography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const Typography = ({children, ...rest}) => (
  <MuiTypography {...rest}>
    {children}
  </MuiTypography>
)

Typography.defaultProps = {
  align: 'inherit',
  color: 'default',
  gutterBottom: false,
  noWrap: false,
  paragraph: false,
  variant: 'body1'
}

Typography.propTypes = {
  /**
   * Sets the text-align on the component.
   */
  align: PropTypes.oneOf(['inherit','left','center','right','justify']),
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * The color of the component.
   */
  color: PropTypes.oneOf(['default','error','inherit','primary','textPrimary','textSecondary']),
  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: PropTypes.bool,
  /**
   * if `true`, the text will not wrap, but instead will truncate with an ellipsis
   */
  noWrap: PropTypes.bool,
  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: PropTypes.bool,
  /**
   * Applies the theme typography styles
   */
  variant: PropTypes.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'button']),
}


export default Typography;

import React from 'react';
import MuiButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  root: {
    borderRadius: '2em',
    minHeight: 44,
  },
  sizeSmall: {
    minHeight: 36
  },
  sizeLarge: {
    minHeight: 50
  }
}


const Button = ({children, ...rest}) => (
  <MuiButton {...rest} variant="raised">
    {children}
  </MuiButton>
)
Button.displayName = "Button"

Button.defaultProps = {
  disabled: false,
  color: 'default',
  component: 'button',
  size: 'medium',
}

Button.propTypes = {
  /**
   * The content of the Button.
   */
  children: PropTypes.node.isRequired,
  /**
   * The color of the component.
   */
  color: PropTypes.oneOf(['default','inherit','primary','secondary']),
  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
  /** if `true`, the button will be disabled. */
  disabled: PropTypes.bool,
  /** The size of the button */
  size: PropTypes.oneOf(['small','medium','large'])
}


export default withStyles(styles)(Button);

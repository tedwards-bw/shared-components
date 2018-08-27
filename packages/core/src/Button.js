import React from 'react';
import MuiButton from '@material-ui/core/Button';
import PropTypes from 'prop-types';


const Button = ({children, ...rest}) => (
  <MuiButton {...rest} variant="contained">
    {children}
  </MuiButton>
)

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


export default Button;

import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import createBandwidthTheme from './createBandwidthTheme';

const BandwidthProvider = ({theme, children}) => {
  //return a MuiThemeProvider with the provided theme spread over the default.
  return (
    <MuiThemeProvider theme={createBandwidthTheme(theme)}>
      {children}
    </MuiThemeProvider>
  )
}

BandwidthProvider.propTypes = {
  /**
   * A theme object. Created with createBandwidthTheme()
   */
  theme: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ])
}

export default BandwidthProvider

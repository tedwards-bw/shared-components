import { createMuiTheme } from '@material-ui/core/styles';
import blue from '../colors/blue';
import orange from '../colors/orange';
import grey from '../colors/grey';

function createBandwidthTheme(options = {}) {
  // this defines the overridden theme options that will be injected by default
  // into mui's theme generator. We spread supplied options on.
  const overrides = {
    palette: {
      primary: {
        ...blue,
        contrastText: '#FFF',
      },
      secondary: blue,
      error: {
        light: orange[100],
        main: orange[500],
        dark: orange[900],
      },
      success: {
        light: '#e0fff7',
        main: '#00aa6c',
        dark: '005c44',
      },
      grey,
      background: {
        default: '#fff',
        paper: '#fff',
        dark: '#004558'
      },
      action: {
        disabledBackground: '#ececec',
      },
    },
    typography: {
      fontFamily: '"Overpass",Raleway,"Open Sans",arial,sans-serif'
    },
    overrides: {
      MuiButton: {
        label: {
          fontWeight: 700,
        }
      }
    },
    ...options
  }
  return createMuiTheme(overrides)
}

export default createBandwidthTheme;

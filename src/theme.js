import { createMuiTheme } from '@material-ui/core/styles';

export const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#0d47a1',
      light: '#5472d3',
      dark: '#002171',
    },
    secondary: {
      main: '#00838f',
    },
    background: {
      default: '#e8eef5',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a237e',
      secondary: '#546e7a',
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Roboto", "Helvetica Neue", Arial, sans-serif',
    h4: { fontWeight: 700, letterSpacing: '-0.02em' },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    subtitle1: { fontWeight: 500 },
    button: { fontWeight: 600, letterSpacing: '0.02em' },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)',
        boxShadow: '0 4px 20px rgba(13, 71, 161, 0.35)',
      },
    },
    MuiPaper: {
      rounded: {
        boxShadow: '0 8px 32px rgba(26, 35, 126, 0.08)',
      },
    },
    MuiCard: {
      root: {
        boxShadow: '0 8px 32px rgba(26, 35, 126, 0.1)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 16px 40px rgba(26, 35, 126, 0.15)',
        },
      },
    },
  },
});

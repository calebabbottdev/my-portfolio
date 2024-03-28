import { extendTheme } from '@mui/joy/styles';

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // primary: {
        //   50: '#fce4ec',
        //   100: '#f8bbd0',
        //   200: '#f48fb1',
        //   300: '#f06292',
        //   400: '#ec407a',
        //   500: '#e91e63',
        //   600: '#d81b60',
        //   700: '#c2185b',
        //   800: '#ad1457',
        //   900: '#880e4f',
        // },
      },
    },
    dark: {
      palette: {
        // primary: {
        //   50: '#fce4ec',
        //   100: '#f8bbd0',
        //   200: '#f48fb1',
        //   300: '#f06292',
        //   400: '#ec407a',
        //   500: '#e91e63',
        //   600: '#d81b60',
        //   700: '#c2185b',
        //   800: '#ad1457',
        //   900: '#880e4f',
        // },
      },
    },
  },
  fontFamily: {
    display: 'Inter, var(--joy-fontFamily-fallback)',
    body: 'Inter, var(--joy-fontFamily-fallback)',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

import { extendTheme } from '@mui/joy/styles';

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#ebf7f4', // Lighter shade of teal
          100: '#c3e7da', // Light teal
          200: '#8ed8c1', // Medium teal
          300: '#5ec8a9', // Darker shade of teal
          400: '#3cbda0', // Dark teal
          500: '#01be96', // Provided color
          600: '#00ae8b', // Slightly darker teal
          700: '#009d80', // Even darker teal
          800: '#008d75', // Quite dark teal
          900: '#007c69', // Very dark teal
        },
        background: {
          body: '#d1f0eb',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#ebf7f4', // Lighter shade of teal
          100: '#c3e7da', // Light teal
          200: '#8ed8c1', // Medium teal
          300: '#5ec8a9', // Darker shade of teal
          400: '#3cbda0', // Dark teal
          500: '#01be96', // Provided color
          600: '#00ae8b', // Slightly darker teal
          700: '#009d80', // Even darker teal
          800: '#008d75', // Quite dark teal
          900: '#007c69', // Very dark teal
        },
        background: {
          body: '#01161e',
        },
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

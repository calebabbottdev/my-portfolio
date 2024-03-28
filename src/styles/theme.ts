import { extendTheme } from '@mui/joy/styles';

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#f3e5f5',
          100: '#e1bee7',
          200: '#ce93d8',
          300: '#ba68c8',
          400: '#ab47bc',
          500: '#9c27b0',
          600: '#8e24aa',
          700: '#7b1fa2',
          800: '#6a1b9a',
          900: '#4a148c',
        },
        secondary: {
          50: '#fce4ec',
          100: '#f8bbd0',
          200: '#f48fb1',
          300: '#f06292',
          400: '#ec407a',
          500: '#e91e63',
          600: '#d81b60',
          700: '#c2185b',
          800: '#ad1457',
          900: '#880e4f',
        },
        // Add more custom colors as needed
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#fce4ec',
          100: '#f8bbd0',
          200: '#f48fb1',
          300: '#f06292',
          400: '#ec407a',
          500: '#e91e63',
          600: '#d81b60',
          700: '#c2185b',
          800: '#ad1457',
          900: '#880e4f',
        },
        secondary: {
          50: '#f3e5f5',
          100: '#e1bee7',
          200: '#ce93d8',
          300: '#ba68c8',
          400: '#ab47bc',
          500: '#9c27b0',
          600: '#8e24aa',
          700: '#7b1fa2',
          800: '#6a1b9a',
          900: '#4a148c',
        },
        // Add more custom colors for dark mode as needed
      },
    },
  },
  fontFamily: {
    display: 'Inter, var(--joy-fontFamily-fallback)',
    body: 'Inter, var(--joy-fontFamily-fallback)',
  },
  // Define additional typography options such as h1, h2, ...
  shadows: {
    // Define custom shadow options for light and dark mode
    light: [
      'none',
      '0px 2px 1px -1px rgba(0,0,0,0.02),0px 1px 1px 0px rgba(0,0,0,0.01),0px 1px 3px 0px rgba(0,0,0,0.01)',
      // Add more shadow values for light mode as needed
    ],
    dark: [
      'none',
      '0px 4px 6px -1px rgba(255,255,255,0.05),0px 2px 4px -1px rgba(255,255,255,0.04),0px 1px 10px -1px rgba(255,255,255,0.03)',
      // Add more shadow values for dark mode as needed
    ],
  },
  breakpoints: {
    // Define custom breakpoints for different screen sizes
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  // Add more custom theme options as needed
});

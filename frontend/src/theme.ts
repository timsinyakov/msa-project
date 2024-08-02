import { Button, colorsTuple, createTheme, virtualColor } from '@mantine/core';
import { NavLink } from 'react-router-dom';

export const theme = createTheme({
  colors: {
    custom: colorsTuple('#191970'),
    dynamic: colorsTuple(Array.from({ length: 10 }, (_, index) => '#FF0000')),

    component: colorsTuple('white'),

    primary: virtualColor({
      name: 'primary',
      dark: 'dimmed',
      light: 'black',
    }),

    dimmed: virtualColor({
      name: 'dimmed',
      dark: '#A9A9A9', // Dimmed color for dark mode
      light: 'black', // Default color for light mode
    }),
    purpleButton: colorsTuple('139, 26, 161'),

    buttonColor: virtualColor({
      name: 'buttonColor',
      dark: 'blue',
      light: 'dark',
    }),
  },

  components: {
    Text: {
      defaultProps: {
        color: 'light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))',
      },
    },
    Rating: {
      defaultProps: {
        color: 'yellow',
      },
    },
    Button: {
      defaultProps: {
        color: 'buttonColor',
      },
    },
  },

  fontFamily: 'Roboto, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Greycliff CF, sans-serif' },

  fontSizes: {
    xs: '23px',
    sm: '20px',
    md: '20px',
    lg: '28px',
    xl: '30px',
  },

  // Add fontWeights property to define font weights
});

import { Button, colorsTuple, createTheme, virtualColor } from '@mantine/core';

export const theme = createTheme({
  colors: {
    custom: colorsTuple('#191970'),
    dynamic: colorsTuple(Array.from({ length: 10 }, (_, index) => '#FF0000')),

    component: colorsTuple('#FF0000'),

    primary: virtualColor({
      name: 'primary',
      dark: 'custom',
      light: 'cyan',
    }),
  },

  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'primary',
        variant: 'filled',
      },
    }),
    Text: {
      defaultProps: {
        color: 'component',
        variant: 'filled',
      },
    },
    Rating: {
      defaultProps: {
        color: 'black',
        variant: 'filled',
      },
    },
  },

  fontFamily: 'Roboto, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Greycliff CF, sans-serif' },
});

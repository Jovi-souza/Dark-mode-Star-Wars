import { globalCss } from './Stitches.config';

export const GlobalCss = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    webkitFontSmoothing: 'antialiased',
    backgroundColor: '$background',
  },

  html: {
    fontSize: '62.5%',
    scrollBehavior: 'smooth',
    fontFamily: 'Baloo2, cursive'
  },

  button: {
    cursor: 'pointer',
  },

  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
});
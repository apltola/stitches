import { createStitches, globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  html: {
    fontFamily: 'system-ui',
    color: '#222328',
  },
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: '#F9FAFE',
  },
  button: {
    cursor: 'pointer',
    color: 'inherit',
  },
  h1: { margin: 0 },
  h2: { margin: 0 },
  h3: { margin: 0 },
});

export const { config, createTheme, css, getCssText, styled, theme } =
  createStitches({
    theme: {
      colors: {
        hiContrast: 'hsl(206,10%,5%)',
        loContrast: 'white',

        fontBlack: '#222328',

        gray100: 'hsl(206,22%,99%)',
        gray200: 'hsl(206,12%,97%)',
        gray300: 'hsl(206,11%,92%)',
        gray400: 'hsl(206,10%,84%)',
        gray500: 'hsl(206,10%,76%)',
        gray600: 'hsl(206,10%,44%)',

        purple100: 'hsl(252,100%,99%)',
        purple200: 'hsl(252,100%,98%)',
        purple300: 'hsl(252,100%,94%)',
        purple400: 'hsl(252,75%,84%)',
        purple500: 'hsl(252,78%,60%)',
        purple600: 'hsl(252,80%,53%)',
      },
      space: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '35px',
      },
      sizes: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '35px',
      },
      fontSizes: {
        1: '12px',
        2: '13px',
        3: '15px',
        4: '17px',
        5: '19px',
        6: '21px',
      },
      fonts: {
        system: 'system-ui',
      },
      shadows: {
        large: 'rgba(0, 0, 0, 0.12) 0px 30px 60px 0px',
        medium:
          '0 0 1px 0 rgba(189, 192, 207, 0.06), 0 10px 16px -1px rgba(189, 192, 207, 0.2)',
        hover:
          '0 0 1px 0 rgba(189, 192, 207, 0.06), 0 10px 16px -1px rgba(189, 192, 207, 0.4)',
      },
      transitions: {
        bezierSwift: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        bezierSnappy: 'cubic-bezier(.2, .8, .4, 1)',
      },
    },
    utils: {
      marginX: (value) => ({
        marginLeft: value,
        marginRight: value,
      }),
      marginY: (value) => ({
        marginTop: value,
        marginBottom: value,
      }),
      paddingX: (value) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      paddingY: (value) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    },
    media: {
      bp1: '(min-width: 600px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 992px)',
      // bp4: '(min-width: 1200px)',
    },
  });

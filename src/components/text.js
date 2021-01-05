import * as React from 'react';

const colorLight = {
  primary: 'white',
  secondary: 'rgb(160, 160, 159)',
};

const colorDark = {
  primary: 'rgba(17, 24, 39, var(--tw-text-opacity))',
  secondary: '#575757',
};

export const linkStyle = {
  color: colorDark.primary,
  'font-family': 'Helvetica, Arial',
  'font-weight': '400',
  'font-style': 'normal',
  'font-size': '13px',
  'letter-spacing': '0.06em',
  'line-height': '1.8em',
  'text-decoration': 'none',
};

export function Heading1({ light, children }) {
  const defaultStyle = {
    color: light ? colorLight.primary : colorDark.primary,
    'font-family': 'Helvetica, Arial',
    'font-weight': '100',
    'font-style': 'normal',
    'font-size': '1.6em',
    'letter-spacing': '0.06em',
    'line-height': '1.2em',
    'text-transform': 'uppercase',
    'text-decoration': 'none',
  };
  return <h1 style={defaultStyle}>{children}</h1>;
}

export function Heading3({ light, children }) {
  const defaultStyle = {
    color: light ? colorLight.primary : colorDark.primary,
    'font-family': 'Helvetica, Arial',
    'font-weight': '100',
    'font-style': 'normal',
    'font-size': '1.6em',
    'letter-spacing': '0.06em',
    'line-height': '1.2em',
    'text-transform': 'uppercase',
    'text-decoration': 'none',
  };
  return <h3 style={defaultStyle}>{children}</h3>;
}

export function Heading4({ light, children }) {
  const defaultStyle = {
    color: light ? colorLight.secondary : colorDark.secondary,
    'font-family': 'Arial',
    'font-weight': '400',
    'font-style': 'normal',
    'font-size': '13px',
    'letter-spacing': '0.06em',
    'line-height': '1.8em',
    'text-decoration': 'none',
  };
  return <h4 style={defaultStyle}>{children}</h4>;
}

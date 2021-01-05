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
  fontFamily: 'Helvetica, Arial',
  fontWeight: '400',
  fontStyle: 'normal',
  fontSize: '13px',
  letterSpacing: '0.06em',
  lineHeight: '1.8em',
  textDecoration: 'none',
};

export function Heading1({ light, children }) {
  const defaultStyle = {
    color: light ? colorLight.primary : colorDark.primary,
    fontFamily: 'Helvetica, Arial',
    fontWeight: '100',
    fontStyle: 'normal',
    fontSize: '1.6em',
    letterSpacing: '0.06em',
    lineHeight: '1.2em',
    textTransform: 'uppercase',
    textDecoration: 'none',
  };
  return <h1 style={defaultStyle}>{children}</h1>;
}

export function Heading3({ light, children }) {
  const defaultStyle = {
    color: light ? colorLight.primary : colorDark.primary,
    fontFamily: 'Helvetica, Arial',
    fontWeight: '100',
    fontStyle: 'normal',
    fontSize: '1.6em',
    letterSpacing: '0.06em',
    lineHeight: '1.2em',
    textTransform: 'uppercase',
    textDecoration: 'none',
  };
  return <h3 style={defaultStyle}>{children}</h3>;
}

export function Heading4({ light, children }) {
  const defaultStyle = {
    color: light ? colorLight.secondary : colorDark.secondary,
    fontFamily: 'Helvetica, Arial',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '13px',
    letterSpacing: '0.06em',
    lineHeight: '1.8em',
    textDecoration: 'none',
  };
  return <h4 style={defaultStyle}>{children}</h4>;
}

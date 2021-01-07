import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const fontDefault = {
  fontFamily: 'Helvetica, Arial',
  letterSpacing: '0.06em',
};

const colorLight = {
  primary: 'white',
  secondary: 'rgb(160, 160, 159)',
};

const colorDark = {
  primary: 'rgba(17, 24, 39, var(--tw-text-opacity))',
  secondary: '#575757',
};

const linkStyleDefault = {
  ...fontDefault,
  fontWeight: '400',
  fontSize: '13px',
  lineHeight: '1.8em',
};

export const linkStyle = {
  ...linkStyleDefault,
};

export const linkStyleActive = {
  ...linkStyleDefault,
};

export function Link({ to, children }) {
  return (
    <GatsbyLink
      to={to}
      className='text-gray-400 hover:text-gray-900 transform duration-300 ease-in-out'
      style={linkStyle}
      activeClassName='text-gray-900'
    >
      {children}
    </GatsbyLink>
  );
}

export function Heading1({ light, children }) {
  const defaultStyle = {
    ...fontDefault,
    color: light ? colorLight.primary : colorDark.primary,
    fontWeight: '100',
    fontSize: '1.6em',
    lineHeight: '1.2em',
    textTransform: 'uppercase',
  };
  return <h1 style={defaultStyle}>{children}</h1>;
}

export function Heading3({ light, children }) {
  const defaultStyle = {
    ...fontDefault,
    color: light ? colorLight.primary : colorDark.primary,
    fontWeight: '100',
    fontSize: '1.6em',
    lineHeight: '1.2em',
    textTransform: 'uppercase',
  };
  return <h3 style={defaultStyle}>{children}</h3>;
}

export function Heading4({ light, children }) {
  const defaultStyle = {
    ...fontDefault,
    color: light ? colorLight.secondary : colorDark.secondary,
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '1.8em',
  };
  return <h4 style={defaultStyle}>{children}</h4>;
}

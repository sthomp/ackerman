import * as React from 'react';
import { Link } from 'gatsby';
import { linkStyle } from './text';

export function NavHeader() {
  return (
    <nav>
      <ul className='flex flex-row justify-end space-x-8 text-white'>
        <li>
          <Link to='/' style={linkStyle} class={'text-gray-900'}>
            House
          </Link>
        </li>
        <li>
          <Link to='/inspiration' style={linkStyle} class={'text-gray-900'}>
            Inspiration
          </Link>
        </li>
      </ul>
    </nav>
  );
}

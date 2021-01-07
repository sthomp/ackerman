import * as React from 'react';
import { Link } from './text';

export function NavHeader() {
  return (
    <nav>
      <ul className='flex flex-row justify-end space-x-8 text-white'>
        <li>
          <Link to='/'>House</Link>
        </li>
        <li>
          <Link to='/inspiration'>Inspiration</Link>
        </li>
      </ul>
    </nav>
  );
}

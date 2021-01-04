import React from 'react';
import { Link } from 'gatsby';

export default function Layout({ children }) {
  return (
    <main>
      <title>Ackerman House Project - Beacon NY</title>
      <nav className="fixed left-0 top-0 w-full z-50 bg-gray-700 bg-opacity-95 py-2 px-8 shadow-lg">
        <ul className="flex flex-row justify-end space-x-4 text-white">
          <li>
            <Link to="/">House</Link>
          </li>
          <li>
            <Link to="/inspiration">Inpsiration</Link>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  );
}

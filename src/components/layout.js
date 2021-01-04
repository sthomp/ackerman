import React from 'react';
import { Link } from 'gatsby';

export default function Layout({ children }) {
  return (
    <main>
      <div className="flex flex-row justify-end space-x-4">
        <Link to="/">House</Link>
        <Link to="/inspiration">Inpsiration</Link>
      </div>
      <div className="container mx-auto px-4">{children}</div>
    </main>
  );
}

import React from 'react';
import { NavHeader } from './nav';
import { Heading1 } from './text';

export default function Layout({ children }) {
  return (
    <main>
      <title>Ackerman House Project - Beacon NY</title>
      <div class='flex justify-between py-8 px-4'>
        <Heading1>Ackerman House · Beacon NY</Heading1>
        <NavHeader />
      </div>
      {children}
    </main>
  );
}

import * as React from 'react';
import { Heading3, Heading4 } from './text';

export default function Spotlight({ title, subtitle, imageFirst, content }) {
  const flexDirection = imageFirst ? 'flex-row-reverse' : 'flex-row';
  return (
    <div className={`md:flex ${flexDirection} border-b`}>
      <div className='flex-grow p-10'>
        {title && <Heading3>{title}</Heading3>}
        {subtitle && <Heading4>{subtitle}</Heading4>}
      </div>
      <div className='bg-gray-200 md:w-1/3'>{content}</div>
    </div>
  );
}

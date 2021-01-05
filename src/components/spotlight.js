import * as React from 'react';

export default function Spotlight({ title, subtitle, imageFirst, content }) {
  const flexDirection = imageFirst ? 'flex-row-reverse' : 'flex-row';
  return (
    <div className={`md:flex ${flexDirection} border-b`}>
      <div className="flex-grow p-10">
        {title && <h3>{title}</h3>}
        {subtitle && <h4>{subtitle}</h4>}
      </div>
      <div className="bg-gray-200 md:w-1/3 h-96">{content}</div>
    </div>
  );
}

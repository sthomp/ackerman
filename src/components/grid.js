import * as React from 'react';

export function GalleryGrid2({ items }) {
  if (items.length !== 2) {
    throw Error('Grid must have 2 items');
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
      {items[0]}
      {items[1]}
    </div>
  );
}

export function GalleryGrid3({ items }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-1'>
      <div>{items[0]}</div>
      <div>{items[1]}</div>
      <div>{items[2]}</div>
    </div>
  );
}

export function GalleryGridMany({ items }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
      {items.map((item, i) => React.cloneElement(item, { key: i }))}
    </div>
  );
}

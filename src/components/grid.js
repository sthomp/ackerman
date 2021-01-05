import * as React from 'react';

export function GalleryGrid1({ items }) {
  if (items.length !== 1) {
    throw Error('Grid must have 1 item');
  }
  return <div className='grid grid-cols-1'>{items[0]}</div>;
}

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

export function GalleryGrid3Wide({ items }) {
  if (items.length !== 3) {
    throw Error('Grid must have 3 items');
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-1'>
      <div className='col-span-2 h-80'>{items[0]}</div>
      <div className='h-80'>{items[1]}</div>
      <div className='h-80'>{items[2]}</div>
    </div>
  );
}

export function GalleryGrid3Tall({ items }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-1 h-96 w-96'>
      <div className='row-span-2'>{items[0]}</div>
      <div>{items[1]}</div>
      <div>{items[2]}</div>
    </div>
  );
}

import * as React from 'react';
import { GalleryGrid1, GalleryGrid2, GalleryGrid3Tall } from './grid';

export function AutoGallery({ title, subtitle, items }) {
  const body = (() => {
    if (!items) {
      return <p>empty!</p>;
    }
    if (items.length === 1) {
      return <GalleryGrid1 items={items} />;
    } else if (items.length === 2) {
      return <GalleryGrid2 items={items} />;
    } else if (items.length === 3) {
      return <GalleryGrid3Tall items={items} />;
    } else {
      return <p>too many</p>;
    }
  })();
  return <Gallery title={title} subtitle={subtitle} body={body} />;
}

export function Gallery({ title, subtitle, body }) {
  return (
    <div className='border-b'>
      <div className='container mx-auto p-4'>
        {title && <h3>{title}</h3>}
        {subtitle && <h4>{subtitle}</h4>}
      </div>
      {body}
    </div>
  );
}

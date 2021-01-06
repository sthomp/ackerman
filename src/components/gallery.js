import * as React from 'react';
import { GalleryGrid2, GalleryGrid3, GalleryGridMany } from './grid';
import { Heading3, Heading4 } from './text';

function Header({ title, subtitle }) {
  return (
    <div className='container mx-auto p-4'>
      {title && <Heading3>{title}</Heading3>}
      {subtitle && <Heading4>{subtitle}</Heading4>}
    </div>
  );
}

export function AutoGallery({ title, subtitle, items }) {
  const body = (() => {
    if (!items) {
      return <p>empty!</p>;
    }
    if (items.length === 1) {
      return items[0];
    } else if (items.length === 2) {
      return <GalleryGrid2 items={items} />;
    } else if (items.length === 3) {
      return <GalleryGrid3 items={items} />;
    } else {
      return <GalleryGridMany items={items} />;
    }
  })();
  return <Gallery title={title} subtitle={subtitle} body={body} />;
}

export function Gallery({ title, subtitle, body }) {
  return (
    <div className='border-b'>
      <Header title={title} subtitle={subtitle} />
      {body}
    </div>
  );
}

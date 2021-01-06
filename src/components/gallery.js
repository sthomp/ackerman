import * as React from 'react';
import { GalleryGrid2, GalleryGrid3, GalleryGridMany } from './grid';
import { Heading3, Heading4 } from './text';

function Header({ title, subtitle }) {
  return (
    <div className='p-4 md:p-12'>
      {title && <Heading3>{title}</Heading3>}
      {subtitle && <Heading4>{subtitle}</Heading4>}
    </div>
  );
}

export function AutoGallery({ title, subtitle, items, headerAlign }) {
  const body = (() => {
    if (!items) {
      return undefined;
    }
    if (headerAlign === 'left' || headerAlign === 'right') {
      return (
        <div>
          {items.map((item, i) => (
            <div key={i} className={`${i < items.length - 1 ? 'mb-1' : ''}`}>
              {item}
            </div>
          ))}
        </div>
      );
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
  return (
    <Gallery
      title={title}
      subtitle={subtitle}
      body={body}
      headerAlign={headerAlign}
    />
  );
}

export function Gallery({ title, subtitle, body, headerAlign }) {
  headerAlign = headerAlign || 'top';
  switch (headerAlign) {
    case 'top':
      return (
        <div className='border-b'>
          <Header title={title} subtitle={subtitle} />
          {body}
        </div>
      );
    case 'left':
      return (
        <div className={`md:flex flex-row border-b`}>
          <Header title={title} subtitle={subtitle} />
          <div className='md:w-4/5'>{body}</div>
        </div>
      );
    case 'right':
      return (
        <div className={`md:flex flex-row-reverse border-b`}>
          <Header title={title} subtitle={subtitle} />
          <div className='md:w-4/5'>{body}</div>
        </div>
      );
    default:
      return undefined;
  }
}

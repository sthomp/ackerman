import * as React from 'react';
import { GalleryGrid1, GalleryGrid2, GalleryGrid3Tall } from './grid';
import { Heading3, Heading4 } from './text';

function Header({ title, subtitle, rightAccessory }) {
  return (
    <div className='container mx-auto p-4 flex justify-between'>
      <div>
        {title && <Heading3>{title}</Heading3>}
        {subtitle && <Heading4>{subtitle}</Heading4>}
      </div>
      {rightAccessory && <div>{rightAccessory}</div>}
    </div>
  );
}

export function AutoGallery({ title, subtitle, items, rightAccessory }) {
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
  return (
    <Gallery
      title={title}
      subtitle={subtitle}
      body={body}
      rightAccessory={rightAccessory}
    />
  );
}

export function Gallery({ title, subtitle, body, rightAccessory }) {
  return (
    <div className='border-b'>
      <Header
        title={title}
        subtitle={subtitle}
        rightAccessory={rightAccessory}
      />
      {body}
    </div>
  );
}

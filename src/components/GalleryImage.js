import * as React from 'react';
import Img from 'gatsby-image';

export default function GalleryImage({ data }) {
  // RemoteImages will use `localImage` whereas local images will use `image`
  const imageData = data.localImage || data.image;
  return (
    <Img
      fluid={imageData.childImageSharp.fluid}
      alt={data.desc}
      style={{ height: '100%' }}
    />
  );
}

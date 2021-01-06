import * as React from 'react';
import Img from 'gatsby-image';

export default function GalleryImage({ data }) {
  return <Img fluid={data.localImage.childImageSharp.fluid} alt={data.desc} />;
}

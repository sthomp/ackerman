import * as React from 'react';
import Img from 'gatsby-image';
import { Heading3 } from './text';

export default function GalleryImage({ data }) {
  // RemoteImages will use `localImage` whereas local images will use `image`
  const imageData = data.localImage || data.image;
  return (
    <div className='relative'>
      <div>
        <Img
          fluid={imageData.childImageSharp.fluid}
          alt={data.desc}
          style={{ height: '100%' }}
        />
      </div>
      {data.desc && (
        <div className='opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-opacity-50 absolute left-0 top-0 right-0 bottom-0 w-full bg-black flex justify-center items-center p-2'>
          {<Heading3 light={true}>{data.desc}</Heading3>}
        </div>
      )}
    </div>
  );
}

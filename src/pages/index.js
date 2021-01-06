import * as React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Spotlight from '../components/spotlight';
import { AutoGallery } from '../components/gallery';
import GalleryImage from '../components/GalleryImage';

// markup
const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query SomeQuery {
      survey: remoteImagesYaml(id: { eq: "survey" }) {
        ...RemoteImageFields
      }

      beam: remoteImagesYaml(id: { eq: "beam" }) {
        ...RemoteImageFields
      }

      garage: remoteImagesYaml(id: { eq: "garage" }) {
        ...RemoteImageFields
      }

      basement1: remoteImagesYaml(id: { eq: "basement1" }) {
        ...RemoteImageFields
      }

      basement2: remoteImagesYaml(id: { eq: "basement2" }) {
        ...RemoteImageFields
      }

      basement3: remoteImagesYaml(id: { eq: "basement3" }) {
        ...RemoteImageFields
      }

      front: remoteImagesYaml(id: { eq: "house_front" }) {
        ...RemoteImageFields
      }

      rear: remoteImagesYaml(id: { eq: "house_rear" }) {
        ...RemoteImageFields
      }

      street: remoteImagesYaml(id: { eq: "house_street" }) {
        ...RemoteImageFields
      }

      top_floor: remoteImagesYaml(id: { eq: "top_floor" }) {
        ...RemoteImageFields
      }
    }
  `);
  return (
    <Layout>
      <Spotlight
        imageFirst={true}
        title='Structure'
        subtitle='Built in 1930 · Wood Frame · Brick Foundation'
        content={<GalleryImage data={images.front} />}
      />

      <Spotlight
        imageFirst={false}
        title='Ground Floor'
        subtitle='Two new LVL beams installed. One beam has been left exposed.'
        content={<GalleryImage data={images.beam} />}
      />

      <Spotlight
        imageFirst={true}
        title='Top Floor'
        subtitle='Currently four bedrooms and one bathroom with attic staircase. Desired layout is three bedroom two bathroom. Attic space is not necessary and could be opened to cathedral ceilings.'
        content={<GalleryImage data={images.top_floor} />}
      />

      <AutoGallery
        title='Post Demolition'
        subtitle='Guided video tour'
        items={[
          <div class='container mx-auto p-4 flex justify-center'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/sfJ-vErUNl0'
              title='After Demolition'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              webkitallowfullscreen='true'
              mozallowfullscreen='true'
              allowFullScreen
            />
          </div>,
        ]}
      />

      <AutoGallery
        title='Basement'
        subtitle='New support beams. Brick repair.'
        items={[
          <GalleryImage data={images.basement1} />,
          <GalleryImage data={images.basement3} />,
          <GalleryImage data={images.basement2} />,
        ]}
      />

      <AutoGallery
        title='Yard'
        subtitle='Space for office studio, patio with BBQ, plantar boxes, etc'
        items={[
          <GalleryImage data={images.garage} />,
          <GalleryImage data={images.rear} />,
        ]}
      />

      <Spotlight
        imageFirst={false}
        title='Land Survey'
        subtitle='As of Dec, 2020'
        content={<GalleryImage data={images.survey} />}
      />

      <AutoGallery
        title='Neighborhood'
        subtitle='Residential street walking distance to Main St'
        items={[<GalleryImage data={images.street} />]}
      />
    </Layout>
  );
};

export default IndexPage;

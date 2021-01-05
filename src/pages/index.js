import * as React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Spotlight from '../components/spotlight';
import { AutoGallery } from '../components/gallery';

// markup
const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query SomeQuery {
      survey: file(relativePath: { eq: "ackerman_survey.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      beam: file(relativePath: { eq: "ackerman_beam.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      garage: file(relativePath: { eq: "garage.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      basement1: file(relativePath: { eq: "house_basement1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      basement2: file(relativePath: { eq: "house_basement2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      basement3: file(relativePath: { eq: "basement3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      front: file(relativePath: { eq: "house_front.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      rear: file(relativePath: { eq: "house_rear.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      street: file(relativePath: { eq: "house_street.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      top_floor: file(relativePath: { eq: "top_floor.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Spotlight
        imageFirst={true}
        title='Structure'
        subtitle='Built in 1930 · Wood Frame · Brick Foundation'
        content={
          <Img
            fluid={images.front.childImageSharp.fluid}
            alt='Front'
            style={{ height: '100%' }}
          />
        }
      />

      <Spotlight
        imageFirst={false}
        title='Ground Floor'
        subtitle='Two new LVL beams installed. One beam has been left exposed.'
        content={
          <Img
            fluid={images.beam.childImageSharp.fluid}
            alt='New Beam'
            style={{ height: '100%' }}
          />
        }
      />

      <Spotlight
        imageFirst={true}
        title='Top Floor'
        subtitle='Currently four bedrooms and one bathroom with attic staircase. Desired layout is three bedroom two bathroom. Attic space is not necessary and could be opened to cathedral ceilings.'
        content={
          <Img
            fluid={images.top_floor.childImageSharp.fluid}
            alt='Top Floor'
            style={{ height: '100%' }}
          />
        }
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
          <Img
            fluid={images.basement1.childImageSharp.fluid}
            alt='Basement1'
            style={{ height: '100%' }}
          />,
          <Img
            fluid={images.basement3.childImageSharp.fluid}
            alt='Basement3'
            style={{ height: '100%' }}
          />,
          <Img
            fluid={images.basement2.childImageSharp.fluid}
            alt='Basement2'
            style={{ height: '100%' }}
          />,
        ]}
      />

      <AutoGallery
        title='Yard'
        subtitle='Space for office studio, patio with BBQ, plantar boxes, etc'
        items={[
          <Img
            fluid={images.garage.childImageSharp.fluid}
            alt='Garage'
            style={{ height: '100%' }}
          />,
          <Img
            fluid={images.rear.childImageSharp.fluid}
            alt='Rear'
            style={{ height: '100%' }}
          />,
        ]}
      />

      <Spotlight
        imageFirst={false}
        title='Land Survey'
        subtitle='As of Dec, 2020'
        content={
          <Img
            fluid={images.survey.childImageSharp.fluid}
            alt='Land Survey'
            style={{ height: '100%' }}
          />
        }
      />

      <AutoGallery
        title='Neighborhood'
        subtitle='Residential street walking distance to Main St'
        body={
          <Img
            fluid={images.street.childImageSharp.fluid}
            alt='Street'
            style={{ height: '100%' }}
          />
        }
      />
    </Layout>
  );
};

export default IndexPage;

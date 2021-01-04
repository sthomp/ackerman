import * as React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

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
      <div className="h-screen w-screen bg-green-500 flex flex-col justify-end relative">
        <div className="z-10 px-8 bg-gradient-to-r from-gray-700 to-transparent font-sans">
          <h1 className="text-white font-light text-4xl font-sans">
            Ackerman House · Beacon NY
          </h1>
          <p className="text-gray-400 font-light">Built in 1836</p>
          <p className="text-gray-400 font-light">Brick Foundation</p>
          <p className="text-gray-400 font-light">Wood Frame</p>
        </div>
        <div className="bg-yellow-500 absolute w-full h-full z-0">
          <Img
            fluid={images.front.childImageSharp.fluid}
            alt="Front"
            style={{ height: '100%' }}
          />
        </div>
      </div>

      <Img fluid={images.survey.childImageSharp.fluid} alt="Land Survey" />
      <Img fluid={images.beam.childImageSharp.fluid} alt="New Beam" />
      <Img fluid={images.garage.childImageSharp.fluid} alt="Garage" />
      <Img fluid={images.basement1.childImageSharp.fluid} alt="Basement1" />
      <Img fluid={images.basement2.childImageSharp.fluid} alt="Basement2" />
      <Img fluid={images.rear.childImageSharp.fluid} alt="Rear" />
      <Img fluid={images.street.childImageSharp.fluid} alt="Street" />
      <Img fluid={images.top_floor.childImageSharp.fluid} alt="Top Floor" />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sfJ-vErUNl0"
        title="After Demolition"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </Layout>
  );
};

export default IndexPage;

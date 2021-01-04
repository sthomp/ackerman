import * as React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

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
    <main>
      <title>Home Page</title>
      <Img fluid={images.survey.childImageSharp.fluid} alt="Land Survey" />
      <Img fluid={images.beam.childImageSharp.fluid} alt="New Beam" />
      <Img fluid={images.garage.childImageSharp.fluid} alt="Garage" />
      <Img fluid={images.basement1.childImageSharp.fluid} alt="Basement1" />
      <Img fluid={images.basement2.childImageSharp.fluid} alt="Basement2" />
      <Img fluid={images.front.childImageSharp.fluid} alt="Front" />
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
    </main>
  );
};

export default IndexPage;

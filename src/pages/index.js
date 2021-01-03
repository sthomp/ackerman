import * as React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

// markup
const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query IndexQuery {
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

      zillow1: remoteImagesYaml(name: { eq: "Zillow Image1" }) {
        name
        localImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  console.log(images.zillow1);
  return (
    <main>
      <title>Home Page</title>
      <Img
        fluid={images.zillow1.localImage.childImageSharp.fluid}
        alt="New Beam"
      />
      <Img fluid={images.survey.childImageSharp.fluid} alt="Land Survey" />
      <Img fluid={images.beam.childImageSharp.fluid} alt="New Beam" />
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

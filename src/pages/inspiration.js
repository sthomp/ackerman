import * as React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const InspirationPage = () => {
  const images = useStaticQuery(graphql`
    query InspirationQuery {
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
  return (
    <main>
      <p>Inspiration</p>
      <Img
        fluid={images.zillow1.localImage.childImageSharp.fluid}
        alt="27 Ackerman"
      />
    </main>
  );
};

export default InspirationPage;

import * as React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const InspirationPage = () => {
  const images = useStaticQuery(graphql`
    query InspirationQuery {
      _27_ackerman_exterior: remoteImagesYaml(
        id: { eq: "27_ackerman_exterior" }
      ) {
        localImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }

      _6_spring_interior: remoteImagesYaml(id: { eq: "6_spring_interior" }) {
        localImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }

      half_bath1: file(relativePath: { eq: "inspiration_half_bath1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      half_bath2: file(relativePath: { eq: "inspiration_half_bath2.jpg" }) {
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
      <p>Inspiration</p>
      <Img
        fluid={images._6_spring_interior.localImage.childImageSharp.fluid}
        alt="6 Spring Interior"
      />
      <Img
        fluid={images._27_ackerman_exterior.localImage.childImageSharp.fluid}
        alt="27 Ackerman"
      />
      <Img fluid={images.half_bath1.childImageSharp.fluid} alt="Half Bath1" />
      <Img fluid={images.half_bath2.childImageSharp.fluid} alt="Half Bath2" />
    </main>
  );
};

export default InspirationPage;

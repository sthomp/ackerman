import * as React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Spotlight from '../components/spotlight';
import { AutoGallery } from '../components/gallery';
import { GalleryGrid2, GalleryGrid3Tall } from '../components/grid';
import { Heading1, Heading4 } from '../components/text';

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

      _6_spring_patio: remoteImagesYaml(id: { eq: "6_spring_patio" }) {
        localImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }

      _38_saint_lukes: remoteImagesYaml(id: { eq: "38_saint_lukes" }) {
        localImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }

      _23_n_cedar_master_bed: remoteImagesYaml(
        id: { eq: "23_n_cedar_master_bed" }
      ) {
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
    <Layout>
      <div className='py-8' />
      <AutoGallery
        title='Living Room'
        subtitle='Exposed Brick Column * Beam * Wide Plank Flooring'
        items={[
          <Img
            fluid={images._6_spring_interior.localImage.childImageSharp.fluid}
            alt='6 Spring Interior'
          />,
          <Img
            fluid={images._38_saint_lukes.localImage.childImageSharp.fluid}
            alt='38 Saint Lukes'
          />,
        ]}
      />

      <Spotlight
        imageFirst={true}
        title='Entry Way'
        content={
          <Img
            fluid={
              images._27_ackerman_exterior.localImage.childImageSharp.fluid
            }
            alt='27 Ackerman'
          />
        }
      />
      <Spotlight
        imageFirst={false}
        title='Outdoor Space'
        content={
          <Img
            fluid={images._6_spring_patio.localImage.childImageSharp.fluid}
            alt='6 Spring Patio'
          />
        }
      />

      <AutoGallery
        title='Secondary Bathroom'
        items={[
          <Img
            fluid={images.half_bath1.childImageSharp.fluid}
            alt='Half Bath1'
          />,
          <Img
            fluid={images.half_bath2.childImageSharp.fluid}
            alt='Half Bath2'
          />,
        ]}
      />

      <Spotlight
        imageFirst={true}
        title='Master Bedroom'
        content={
          <Img
            fluid={
              images._23_n_cedar_master_bed.localImage.childImageSharp.fluid
            }
            alt='_23_n_cedar_master_bed'
          />
        }
      />
    </Layout>
  );
};

export default InspirationPage;

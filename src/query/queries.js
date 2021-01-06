export const ImageFields = graphql`
  fragment RemoteImageFields on RemoteImagesYaml {
    id
    url
    desc
    image {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    localImage {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

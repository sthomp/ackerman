import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { AutoGallery } from '../components/gallery';
import GalleryImage from '../components/GalleryImage';

const InspirationPage = () => {
  const images = useStaticQuery(graphql`
    query InspirationQuery {
      _27_ackerman_exterior: remoteImagesYaml(
        id: { eq: "27_ackerman_exterior" }
      ) {
        ...RemoteImageFields
      }

      _6_spring_interior: remoteImagesYaml(id: { eq: "6_spring_interior" }) {
        ...RemoteImageFields
      }

      _6_spring_patio: remoteImagesYaml(id: { eq: "6_spring_patio" }) {
        ...RemoteImageFields
      }

      _38_saint_lukes: remoteImagesYaml(id: { eq: "38_saint_lukes" }) {
        ...RemoteImageFields
      }

      _23_n_cedar_master_bed: remoteImagesYaml(
        id: { eq: "23_n_cedar_master_bed" }
      ) {
        ...RemoteImageFields
      }

      moxy_bathroom_1: remoteImagesYaml(id: { eq: "moxy_bathroom_1" }) {
        ...RemoteImageFields
      }

      _26_green_st: remoteImagesYaml(id: { eq: "26_green_st" }) {
        ...RemoteImageFields
      }

      _15_lawton_ave: remoteImagesYaml(id: { eq: "15_lawton_ave" }) {
        ...RemoteImageFields
      }

      _175_hartsdale_1: remoteImagesYaml(id: { eq: "175_hartsdale_1" }) {
        ...RemoteImageFields
      }

      _175_hartsdale_2: remoteImagesYaml(id: { eq: "175_hartsdale_2" }) {
        ...RemoteImageFields
      }

      _402_washington_1: remoteImagesYaml(id: { eq: "402_washington_1" }) {
        ...RemoteImageFields
      }

      _402_washington_2: remoteImagesYaml(id: { eq: "402_washington_2" }) {
        ...RemoteImageFields
      }

      humewood_entry: remoteImagesYaml(id: { eq: "humewood_entry" }) {
        ...RemoteImageFields
      }

      humewood_front_window: remoteImagesYaml(
        id: { eq: "humewood_front_window" }
      ) {
        ...RemoteImageFields
      }

      humewood_interior: remoteImagesYaml(id: { eq: "humewood_interior" }) {
        ...RemoteImageFields
      }

      humewood_rear: remoteImagesYaml(id: { eq: "humewood_rear" }) {
        ...RemoteImageFields
      }

      kingsway_interior: remoteImagesYaml(id: { eq: "kingsway_interior" }) {
        ...RemoteImageFields
      }

      _17_north: remoteImagesYaml(id: { eq: "17_north" }) {
        ...RemoteImageFields
      }
    }
  `);
  return (
    <Layout>
      <AutoGallery
        headerAlign='right'
        title='Entry Way'
        subtitle='Small Outdoor Porch · Living Room Extension'
        items={[
          <GalleryImage data={images.humewood_entry} />,
          <GalleryImage data={images.humewood_front_window} />,
          <GalleryImage data={images._27_ackerman_exterior} />,
        ]}
      />

      <AutoGallery
        headerAlign='top'
        title='Living Room'
        subtitle='Exposed Brick Column · Exposed Beam · Wide Plank Flooring'
        items={[
          <GalleryImage data={images._6_spring_interior} />,
          <GalleryImage data={images._38_saint_lukes} />,
          <GalleryImage data={images.humewood_interior} />,
          <GalleryImage data={images.kingsway_interior} />,
        ]}
      />

      <AutoGallery
        headerAlign='right'
        title='Staircase'
        subtitle='Wide panel · Doorway Clearance · Landing Space'
        items={[
          <GalleryImage data={images._15_lawton_ave} />,
          <GalleryImage data={images._175_hartsdale_1} />,
          <GalleryImage data={images._17_north} />,
        ]}
      />

      <AutoGallery
        headerAlign='left'
        title='Outdoor Space'
        subtitle='Low Upkeep · No Grass · Space to relax and BBQ'
        items={[
          <GalleryImage data={images._6_spring_patio} />,
          <GalleryImage data={images._402_washington_1} />,
          <GalleryImage data={images._402_washington_2} />,
          <GalleryImage data={images.humewood_rear} />,
        ]}
      />

      <AutoGallery
        title='Secondary Bathroom'
        subtitle='Standing Shower'
        items={[<GalleryImage data={images.moxy_bathroom_1} />]}
      />

      <AutoGallery
        title='Master Bedroom'
        subtitle='Cathedral Ceilings · Ceiling Fan · Ensuite Bathroom · Wide plank flooring'
        items={[
          <GalleryImage data={images._23_n_cedar_master_bed} />,
          <GalleryImage data={images._175_hartsdale_2} />,
        ]}
      />
    </Layout>
  );
};

export default InspirationPage;

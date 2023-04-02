import React from "react";
import HeaderOne from "../components/HeaderOne";
import BreadCrumb from "../elements/BreadCrumb";
import LatestProjectsTwo from "../components/LatestProjectsTwo";
import OurClientOne from "../components/OurClientOne";
import FooterOne from "../components/FooterOne";
const Project = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Bread Crumb */}
      <BreadCrumb title={"Project"} />

      {/* LatestProjectsTwo */}
      <LatestProjectsTwo />

      {/* Our Client One */}
      <section className='ourclient-section-version-one bg-white py-80'>
        <OurClientOne />
      </section>

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Project;

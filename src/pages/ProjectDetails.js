import React from "react";
import HeaderOne from "../components/HeaderOne";
import BreadCrumb from "../elements/BreadCrumb";
import ProjectDetailsInner from "../components/ProjectDetailsInner";
import FooterOne from "../components/FooterOne";
import OurClientOne from "../components/OurClientOne";

const ProjectDetails = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Bread Crumb */}
      <BreadCrumb title={"Project Details"} />

      {/* Project Details Inner */}
      <ProjectDetailsInner />

      {/* Our Client One */}
      <section className='ourclient-section-version-one bg-white py-80'>
        <OurClientOne />
      </section>

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default ProjectDetails;

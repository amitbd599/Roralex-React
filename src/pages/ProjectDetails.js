import React from "react";
import HeaderOne from "../components/HeaderOne";
import BreadCrumb from "../elements/BreadCrumb";
import ProjectDetailsInner from "../components/ProjectDetailsInner";
import FooterOne from "../components/FooterOne";

const ProjectDetails = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Bread Crumb */}
      <BreadCrumb title={"Project Details"} />

      {/* Project Details Inner */}
      <ProjectDetailsInner />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default ProjectDetails;

import React from "react";
import HeaderOne from "../components/HeaderOne";
import BreadCrumb from "../elements/BreadCrumb";
import TeamInner from "../components/TeamInner";
import OurClientOne from "../components/OurClientOne";
import FooterOne from "../components/FooterOne";
import ProjectBackgroundOverlayFour from "../components/ProjectBackgroundOverlayFour";
import ClientReviewThree from "../components/ClientReviewThree";

const Team = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Bread Crumb */}
      <BreadCrumb title={"Team"} />

      {/* TeamInner */}
      <TeamInner />

      {/* ProjectBackgroundOverlayFour */}
      <ProjectBackgroundOverlayFour />

      {/* ClientReviewThree */}
      <ClientReviewThree />

      {/* Our Client One */}
      <section className='ourclient-section-version-one bg-white py-80'>
        <OurClientOne />
      </section>

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Team;

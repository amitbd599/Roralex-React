import React from "react";
import HeaderOne from "../components/HeaderOne";
import BreadCrumb from "../elements/BreadCrumb";
import ServicesInner from "../components/ServicesInner";
import OurTeamThree from "../components/OurTeamThree";
import OurClientOne from "../components/OurClientOne";
import FooterOne from "../components/FooterOne";

const Services = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Bread Crumb */}
      <BreadCrumb title={"Services"} />

      {/* ServicesInner */}
      <ServicesInner />

      {/* OurTeamThree */}
      <section className='ourTeam-section-version-three bg-gray py-80'>
        <OurTeamThree />
      </section>

      {/* Our Client One */}
      <section className='ourclient-section-version-one bg-white py-80'>
        <OurClientOne />
      </section>

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Services;

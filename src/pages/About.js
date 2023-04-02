import React from "react";
import HeaderOne from "../components/HeaderOne";
import BreadCrumb from "../elements/BreadCrumb";
import AboutOne from "../components/AboutOne";
import WhyChooseUsFour from "../components/WhyChooseUsFour";
import ProjectBackgroundOverlayOne from "../components/ProjectBackgroundOverlayOne";
import OurTeamThree from "../components/OurTeamThree";
import OurClientOne from "../components/OurClientOne";
import FooterOne from "../components/FooterOne";

const About = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Bread Crumb */}
      <BreadCrumb title={"About Us"} />

      {/* About One */}
      <section className='about-section-version-one  py-80'>
        <AboutOne />
      </section>

      {/* Why Choose Us Four */}
      <WhyChooseUsFour />

      {/* Project Background Overlay One */}
      <section
        className='projectBackgroundOverlay bg-white mb-100'
        style={{
          backgroundImage: "url('assets/img/bg-overlay/bg-overlay-1.png')",
        }}
      >
        <ProjectBackgroundOverlayOne />
      </section>

      {/* Our Team Three */}
      <section className='ourTeam-section-version-three bg-gray py-100'>
        <OurTeamThree />
      </section>

      {/* Our Client One */}
      <section className='ourclient-section-version-one bg-white py-100'>
        <OurClientOne />
      </section>

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default About;

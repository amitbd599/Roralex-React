import React from "react";
import AboutOne from "../components/AboutOne";
import BlogSectionOne from "../components/BlogSectionOne";
import ClientReviewOne from "../components/ClientReviewOne";
import FooterOne from "../components/FooterOne";
import HeaderOne from "../components/HeaderOne";
import LatestProjectsOne from "../components/LatestProjectsOne";
import NewsLetterOne from "../components/NewsLetterOne";
import OurClientOne from "../components/OurClientOne";
import OurPlanPriceOne from "../components/OurPlanPriceOne";
import OurTeamOne from "../components/OurTeamOne";
import ProjectBackgroundOverlayOne from "../components/ProjectBackgroundOverlayOne";
import ServiceListOne from "../components/ServiceListOne";
import SliderOne from "../components/SliderOne";
import WhyChooseUs from "../components/WhyChooseUs";

const HomeOne = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Slider One */}
      <SliderOne />

      {/* About One */}
      <section className='about-section-version-one  pt-40 pb-80'>
        <AboutOne />
      </section>

      {/* Service List One */}
      <ServiceListOne />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Project Background Overlay One */}
      <section
        className='projectBackgroundOverlay bg-white '
        style={{
          backgroundImage: "url('assets/img/bg-overlay/bg-overlay-1.png')",
        }}
      >
        <ProjectBackgroundOverlayOne />
      </section>

      {/* Our Team One */}
      <OurTeamOne />

      {/* Latest Projects One */}
      <LatestProjectsOne />

      {/* Client Review One */}
      <ClientReviewOne />

      {/* Blog Section One */}
      <BlogSectionOne />

      {/* Our Plan Price One */}
      <OurPlanPriceOne />

      {/* News Letter One */}
      <NewsLetterOne />

      {/* Our Client One */}
      <section className='ourclient-section-version-one py-80'>
        <OurClientOne />
      </section>

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default HomeOne;

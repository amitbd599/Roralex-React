import React from "react";
import AboutThree from "../components/AboutThree";
import BlogSectionThree from "../components/BlogSectionThree";
import ClientReviewThree from "../components/ClientReviewThree";
import FooterThree from "../components/FooterThree";
import HeaderThree from "../components/HeaderThree";
import LatestProjectsThree from "../components/LatestProjectsThree";
import NewsLetterThree from "../components/NewsLetterThree";
import OurClientThree from "../components/OurClientThree";
import OurPlanPriceThree from "../components/OurPlanPriceThree";
import ProjectBackgroundOverlayThree from "../components/ProjectBackgroundOverlayThree";
import ServiceListThree from "../components/ServiceListThree";
import SliderThree from "../components/SliderThree";
import WhyChooseUsThree from "../components/WhyChooseUsThree";

const HomeThree = () => {
  return (
    <>
      {/* Header Three */}
      <HeaderThree />

      {/* Slider Three */}
      <SliderThree />

      {/* About Three */}
      <AboutThree />

      {/* Service List Three */}
      <ServiceListThree />

      {/* Why Choose Us Three */}
      <WhyChooseUsThree />

      {/* Project Background Overlay Three */}
      <ProjectBackgroundOverlayThree />

      {/* Latest Projects Three */}
      <LatestProjectsThree />

      {/* Client Review Three */}
      <ClientReviewThree />

      {/* Blog Section Three */}
      <BlogSectionThree />

      {/* Our Plan Price Three */}
      <OurPlanPriceThree />

      {/* News Letter Three */}
      <NewsLetterThree />

      {/* Our Client Three */}
      <OurClientThree />

      {/* Footer Three */}
      <FooterThree />
    </>
  );
};

export default HomeThree;

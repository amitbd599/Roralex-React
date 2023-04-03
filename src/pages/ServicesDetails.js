import React from "react";
import HeaderOne from "../components/HeaderOne";
import BreadCrumb from "../elements/BreadCrumb";
import ServiceDetailsInner from "../components/ServiceDetailsInner";
import OurClientOne from "../components/OurClientOne";
import FooterOne from "../components/FooterOne";

const ServicesDetails = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Bread Crumb */}
      <BreadCrumb title={"Services Details"} />

      {/* ServiceDetailsInner */}
      <ServiceDetailsInner />

      {/* Our Client One */}
      <section className='ourclient-section-version-one bg-white py-80'>
        <OurClientOne />
      </section>

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default ServicesDetails;

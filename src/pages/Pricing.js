import React from "react";
import HeaderOne from "../components/HeaderOne";
import BreadCrumb from "../elements/BreadCrumb";
import PricingInner from "../components/PricingInner";
import FooterOne from "../components/FooterOne";

const Pricing = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Bread Crumb */}
      <BreadCrumb title={"Pricing"} />

      {/* PricingInner */}
      <PricingInner />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Pricing;

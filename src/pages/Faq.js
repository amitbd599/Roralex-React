import React from "react";
import HeaderOne from "../components/HeaderOne";
import BreadCrumb from "../elements/BreadCrumb";
import FaqInner from "../components/FaqInner";
import FooterOne from "../components/FooterOne";

const Faq = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Bread Crumb */}
      <BreadCrumb title={"FAQ"} />

      {/* Faq Inner */}
      <FaqInner />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Faq;

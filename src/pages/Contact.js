import React from "react";
import HeaderOne from "../components/HeaderOne";
import BreadCrumb from "../elements/BreadCrumb";
import ContactInner from "../components/ContactInner";
import FooterOne from "../components/FooterOne";

const Contact = () => {
  return (
    <>
      {/* Header One */}
      <HeaderOne />

      {/* Bread Crumb */}
      <BreadCrumb title={"Contact"} />

      {/* Contact Inner */}
      <ContactInner />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Contact;

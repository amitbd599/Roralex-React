import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";

const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const BreadCrumb = React.lazy(() => import("../elements/BreadCrumb"));
const ContactInner = React.lazy(() => import("../components/ContactInner"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const Contact = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Header One */}
          <HeaderOne />

          {/* Bread Crumb */}
          <BreadCrumb title={"Contact"} />

          {/* Contact Inner */}
          <ContactInner />

          {/* Footer One */}
          <FooterOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default Contact;

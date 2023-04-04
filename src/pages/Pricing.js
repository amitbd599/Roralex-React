import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";

const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const BreadCrumb = React.lazy(() => import("../elements/BreadCrumb"));
const PricingInner = React.lazy(() => import("../components/PricingInner"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const Pricing = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Header One */}
          <HeaderOne />

          {/* Bread Crumb */}
          <BreadCrumb title={"Pricing"} />

          {/* PricingInner */}
          <PricingInner />

          {/* Footer One */}
          <FooterOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default Pricing;

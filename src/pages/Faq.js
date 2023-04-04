import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";

const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const BreadCrumb = React.lazy(() => import("../elements/BreadCrumb"));
const FaqInner = React.lazy(() => import("../components/FaqInner"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const OurClientOne = React.lazy(() => import("../components/OurClientOne"));
const Faq = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Header One */}
          <HeaderOne />

          {/* Bread Crumb */}
          <BreadCrumb title={"FAQ"} />

          {/* Faq Inner */}
          <FaqInner />

          {/* Our Client One */}
          <section className='ourclient-section-version-one bg-white py-80'>
            <OurClientOne />
          </section>

          {/* Footer One */}
          <FooterOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default Faq;

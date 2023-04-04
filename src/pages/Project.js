import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";

const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const BreadCrumb = React.lazy(() => import("../elements/BreadCrumb"));
const LatestProjectsTwo = React.lazy(() =>
  import("../components/LatestProjectsTwo")
);
const OurClientOne = React.lazy(() => import("../components/OurClientOne"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const Project = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Header One */}
          <HeaderOne />

          {/* Bread Crumb */}
          <BreadCrumb title={"Project"} />

          {/* LatestProjectsTwo */}
          <LatestProjectsTwo />

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

export default Project;
